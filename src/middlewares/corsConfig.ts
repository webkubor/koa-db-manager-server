// CORS 配置单独模块
const corsConfig = {
    credentials: true, // 允许身份验证信息
    origin: "*",       // 允许的来源，生产环境可以指定特定域名
    methods: ["GET", "POST", "PUT"], // 允许的 HTTP 方法
    headers: ["Content-Type", "Authorization"], // 允许的头部信息
  };
  
  export default corsConfig;
  