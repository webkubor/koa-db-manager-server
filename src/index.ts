import Koa from "koa";
import { checkMongoDBConnection } from "./db/mongoose";
import { checkMySqlConnection } from "./db/mysql";
import setMiddlewares from "./middlewares";
import {Echo}  from "./utils/echo";
import {getLocalIPAddress}  from "./utils/getIp";


const app = new Koa();
const port = 3001;

setMiddlewares(app);
// checkMySqlConnection();
checkMongoDBConnection();

app.listen(port, () => {
  Echo.yellow(`Server is running at http://localhost:${port}`)
  Echo.yellow(`Server is open at ${getLocalIPAddress(port)}`)
});




