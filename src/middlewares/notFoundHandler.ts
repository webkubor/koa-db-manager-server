// 处理 404 请求的中间件
export default async function notFoundHandler(ctx) {
    ctx.status = 404;
    ctx.body = `${ctx.method} request for ${ctx.url} is Not found`; // 响应未处理的请求
  }