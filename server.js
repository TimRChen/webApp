/**
 * @author <huangjiandong>
 * @file  study NodeJs
 */

let http = require('http');
let url = require('url');

/**
 * 服务器运行函数
 * 
 * @param {Function} route route函数，匹配路由，并调用相应处理函数
 * @param {Object} handle handle对象，作为传递参数
 */
let start = (route, handle) => {
    let onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        // pathname用于找出浏览器请求的URL路径

        route(handle, pathname, response, request);

        // response.writeHead(200, {"Content-Type":"text/plain"});
        // let content = route(handle, pathname);
        // response.write(content);
        // response.end();
        // 将onRequest()处理程序中所有有关response的函数调都移除
        // 我们希望这部分工作让route()函数来完成
    };

    http.createServer(onRequest).listen(8080);
    console.log('Server has started.');    
};


exports.start = start;
// 输出start函数作为server模块对象中的一个方法