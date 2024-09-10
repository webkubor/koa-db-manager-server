import logger from './logger'; // 引入日志记录模块

// 错误处理中间件
export default async function errorHandler(ctx, next) {
  try {
    await next(); // 执行后续中间件
  } catch (err) {
    logger.error(err);  // 记录错误
    ctx.status = err.status || 500;  // 设置 HTTP 响应状态码
    ctx.body = err.message;  // 返回错误消息
  }
}
