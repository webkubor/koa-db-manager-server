import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '..', '.env') });


// 设置 MongoDB 连接的主机、端口和数据库名称，可以通过环境变量进行配置，或者使用默认值
const DB_HOST = process.env.DB_HOST || 'localhost';  // DB_HOST: MongoDB 服务的主机地址
const DB_PORT = process.env.DB_PORT || '27017';      // DB_PORT: MongoDB 服务的端口号
const DB_NAME = process.env.DB_NAME || 'webkubor';   // DB_NAME: MongoDB 数据库的名称

// 构建 MongoDB 的连接 URI
export const MONGODB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`; // MONGODB_URI: 完整的 MongoDB 连接 URI

// 定义 MongoDB 连接选项，使用新的 URL 解析器和统一拓扑结构
const options = {
  useNewUrlParser: true,      // useNewUrlParser: 使用新的 URL 字符串解析器以避免旧解析器的缺陷
  useUnifiedTopology: true,   // useUnifiedTopology: 使用 MongoDB 驱动的新统一拓扑架构，优化连接处理
} as ConnectOptions;           // ConnectOptions: 定义与 MongoDB 连接时的配置选项类型

// 定义一个变量 `client` 来存储 mongoose 实例，初始化为 null
export let client: typeof mongoose | null = null; // client: 存储当前的 mongoose 实例，初始值为 null

// 检查 MongoDB 的连接并返回 mongoose 实例
export const checkMongoDBConnection = async (): Promise<typeof mongoose> => {
  try {
    // 连接到 MongoDB 并将 mongoose 实例赋值给 `client`
    client = await mongoose.connect(MONGODB_URI, options);  // 尝试连接 MongoDB 数据库
    console.log("MongoDB 连接成功！Connected to MongoDB at " + MONGODB_URI);
    return client; // 成功后返回 mongoose 实例
  } catch (err) {
    // 连接失败，输出错误信息并退出进程
    console.error("Failed to connect to MongoDB", err);  // 打印连接失败的错误日志
    process.exit(1);  // 以退出码 1 终止当前进程，表示连接失败
    return null; // 返回 null 以防止类型错误
  }
};

// 获取 MongoDB 数据库实例的函数
export async function getDb() {
  // 调用检查连接的函数，确保已连接
  const mongoConnection = await checkMongoDBConnection(); // 确保数据库连接已成功建立
  // 返回 mongoose 连接中的数据库对象
  return mongoConnection.connection.db; // 返回当前连接的数据库实例
}
