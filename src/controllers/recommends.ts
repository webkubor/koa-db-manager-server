import Koa from "koa";
import { client } from "../db/mongoose";


class RecommendsController {
  static async listCollections(ctx: Koa.Context) {
    const collections = await client.connection.db.listCollections().toArray();
    ctx.body = {
      list: collections,
    };
  }

  static async getRecommends(ctx: Koa.Context) {
    ctx.body = {
      list: [],
    };
  }
}

export default RecommendsController;
