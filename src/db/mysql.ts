// config/db.ts
import { createPool, Pool, PoolConnection } from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'webkubor',
  database: 'mysql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

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
    connection.release();
    return rows;
  } catch (err) {
    console.error(`Error executing query: ${err}`);
    if (connection) {
      connection.release();
    }
    throw err;
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
