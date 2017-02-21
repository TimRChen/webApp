/**
 * @author <huangjiandong>
 * @for  study NodeJs
 */

let http = require('http');
let url = require('url');

let start = (route, handle) => {
    let onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        // pathname用于找出浏览器请求的URL路径

        response.writeHead(200, {"Content-Type":"text/plain"});
        let content = route(handle, pathname);
        response.write(content);
        response.end();
    };

    http.createServer(onRequest).listen(8080);
    console.log('Server has started.');    
};


exports.start = start;
// 输出start函数作为server模块对象中的一个方法