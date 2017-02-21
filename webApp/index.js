/**
 * @author <huangjiandong>
 * @file 用于调用其他模块
 */

let server = require('./server.js');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
// handle对象为route中对应的http请求路径与其对应方法
// 即将不同的URL映射到相应的处理程序中

server.start(router.route, handle);
// 将路由函数注入到服务器中
