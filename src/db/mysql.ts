// config/db.ts
import { createPool, Pool, PoolConnection } from 'mysql2/promise';

import logger from '../middlewares/logger'; // 引入日志记录模块
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const dbConfig = {
  host: process.env.MYSQL_ROOT_HOST || 'localhost',
  user: process.env.MYSQL_ROOT_USER || 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || '',
  database: process.env.MYSQL_ROOT_NAME || 'mysql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,  // 10秒超时
  idleTimeout: 60000,     // 1分钟的空闲超时
};
console.log(`output->dbConfig`,dbConfig)

// 初始化 MySQL 连接池
const pool: Pool = createPool(dbConfig);

// 导出数据库连接池
export { pool };

/**
 * @name: 搜索库
 * @param {string} sql
 * @param {any} values
 * @return {*}
 */
export async function query(sql: string, values?: any): Promise<any> {
  let connection: PoolConnection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(sql, values);
    logger.info(`SQL executed: ${sql}, Values: ${JSON.stringify(values)}`);
    return rows;
  } catch (err) {
    logger.error(`Error executing query: ${err}, SQL: ${sql}, Values: ${JSON.stringify(values)}`);
    throw err;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}





// 返回数据库连接状态
export async function checkMySqlConnection(): Promise<boolean> {
  let connection: PoolConnection;
  try {
    connection = await pool.getConnection();
    console.log('MySQL 数据库已成功连接!');
    connection.release();
    return true;
  } catch (err) {
    console.error(`Error checking connection: ${err}`);
    if (connection) {
      connection.release();
    }
    return false;
  }
}
