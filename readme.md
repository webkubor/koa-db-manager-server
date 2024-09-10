### Koa2 + TS + mysql + mongoDB

首先欢迎大家了解这个项目，这个项目旨在学习，适合前端入门后台，用node服务端的同学，这里你可以学习到以下几点

- 连接管理数据库mongoDB, 并使用它
- 连接管理数据库mysql, 并使用它
- 熟悉开发环境下使用nodemon运行项目
- 熟悉pm2管理node项目
- 使用koa如何用ts语法开发
- 开放本地支持-局域网，热更新
- 使用koa如何开发resful风格的接口
- 使用新的包管理器pnpm管理本地的依赖
- 企业级开发后台接口的项目结构


#### 运行项目

```js
pnpm i

pnpm run  dev

```

#### 关于项目里的 ES6 写法

如果是 Node.js 项目，推荐使用 "target": "es6" 和 "module": "commonjs"，因为 Node.js 使用 CommonJS 作为模块系统。
如果是浏览器项目，推荐使用 "target": "es6" 和 "module": "es6"，因为现代浏览器支持原生的 ES 模块。


其实我在 ts 配置中写的是
```json
  "target": "es6",
   "module": "commonjs",
```

- TypeScript 支持： TypeScript 编译器允许你在 .ts 文件中使用 ES6 的 import 和 export，并在编译时将其转换为指定的模块系统（如 CommonJS）
- 编译结果： 在编译后，ES6 模块语法会被转换为 CommonJS 模块语法。
- 运行时处理： 使用 ts-node 可以直接运行 TypeScript 文件，它会动态处理 import 和 export 语法，无需先编译为 JavaScript

#### MongoDB 

内容管理系统（CMS）：
MongoDB 的灵活文档模型非常适合存储和管理各种类型的内容，如文章、页面、用户生成的内容等。可以轻松地添加、更新和删除内容字段，而无需修改数据库模式。
支持快速的读写操作，能够满足高并发的用户请求。
例如，一个博客平台可以使用 MongoDB 存储文章、评论、用户信息等，方便地进行内容的管理和展示。


电子商务平台：
可以存储商品信息、用户购物车、订单历史等数据。
利用 MongoDB 的索引和查询功能，可以快速检索商品、查找用户订单、进行库存管理等操作。
对于不断变化的商品属性和用户行为数据，MongoDB 的动态模式能够适应业务的快速发展。


物联网（IoT）应用
设备数据存储和分析：
IoT 设备产生大量的实时数据，MongoDB 可以高效地存储这些数据，并提供强大的查询和分析功能。

可以存储设备传感器数据、状态信息、事件日志等，方便进行实时监控和历史数据分析。
利用 MongoDB 的聚合框架和时间序列集合，可以对设备数据进行复杂的统计分析和趋势预测。
例如，一个智能工厂可以使用 MongoDB 存储生产设备的传感器数据，实时监测设备运行状态，进行故障预测和生产优化



#### mysql

######  获取所有用户
```SQL
const sql = 'SELECT * FROM users';
const users = await query(sql);
console.log(users);

```
###### 根据 ID 获取用户
```SQL
const sql = 'SELECT * FROM users WHERE id = ?';
const userId = 1;
const user = await query(sql, [userId]);
console.log(user);
```
###### 插入数据
```SQL
const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
const values = ['Alice', 'alice@example.com', 25];
const result = await query(sql, values);
console.log(result); // 包含插入结果，如 insertId、affectedRows 等

```
##### UPDATE 更新数据
```SQL
const sql = 'UPDATE users SET email = ? WHERE id = ?';
const values = ['alice.new@example.com', 1];
const result = await query(sql, values);
console.log(result); // 包含受影响的行数

```

###### 删除
```SQL
const sql = 'DELETE FROM users WHERE id = ?';
const userId = 1;
const result = await query(sql, [userId]);
console.log(result); // 包含受影响的行数

```


#### pm2 的运行

```bash
pm2 show
pm2 status
pm2 stop app.js
pm2 restart app.js
pm2 delete app.js

```