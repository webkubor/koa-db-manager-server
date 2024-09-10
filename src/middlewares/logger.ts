import winston from 'winston';
import fs from 'fs';
import path from 'path';

// 确保日志目录存在。如果不存在，则创建日志目录。
const logsDirectory = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// 获取当前日期，用于生成每日的日志文件名
const now = new Date();
const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

// 创建 Winston 日志记录器
// 初始时将 `silent` 设置为 true，避免在没有日志时生成空的日志文件
const logger = winston.createLogger({
  level: 'error', // 日志级别为 error，表示只记录错误级别的日志
  format: winston.format.json(), // 日志格式为 JSON 格式
  transports: [
    new winston.transports.File({
      filename: `logs/error_${formattedDate}.log`, // 日志文件路径
      silent: true, // 初始时 silent 为 true，防止生成空文件
    }),
  ],
});

/**
 * 说明：
 * - `silent: true` 表示初始时日志文件不写入任何内容（避免生成空文件）。
 * - 当有日志数据写入时，我们将 `silent` 动态设置为 `false`，让日志文件开始写入数据。
 */

// 当有日志写入时，监听日志流（'data' 事件），取消 silent 模式
logger.on('data', (log) => {
  logger.transports.forEach(transport => {
    if (transport instanceof winston.transports.File) {
      transport.silent = false; // 如果检测到日志记录，则取消 silent，开始记录到文件
    }
  });
});

export default logger;
