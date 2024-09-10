import Koa from "koa";
import cors from "koa-cors";
import getRouter from "../router";
import corsConfig from "./corsConfig";
import errorHandler from "./errorHandler";
import notFoundHandler from "./notFoundHandler";

export default function setMiddlewares(app: Koa) {
  const router = getRouter();
  app.use(cors(corsConfig));
  app.use(router.routes());
  app.use(router.allowedMethods()); //我们将路由中间件注册到应用程序中，并使用 allowedMethods() 方法处理不支持的 HTTP 方法
  app.use(errorHandler);
  app.use(notFoundHandler);
}
