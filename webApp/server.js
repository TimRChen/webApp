/**
 * @author <huangjiandong>
 * @for  study NodeJs
 */

let http = require('http');
let url = require('url');

let start = (route, handle) => {
    let onRequest = (request, response) => {
        let postData = '';
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        // pathname用于找出浏览器请求的URL路径

        request.setEncoding('utf8');
        // 设置了接收数据的编码格式为UTF-8

        // 在data事件回调中收集所有的POST数据
        request.addListener('data', (postDataChunk) => {
            postData += postDataChunk;
            console.log('Received POST data chunk ' + postDataChunk + '.');
            /**
             * 在每个数据块到达的时候输出了日志，这对于最终生产环境来说
             * ，是很不好的（数据量可能会很大，还记得吧？）
             * ，但是，在开发阶段是很有用的，有助于让我们看到发生了什么。
             */
        });

        request.addListener('end', () => {
            route(handle, pathname, response, postData);
            // 将response作为第三个参数传递给route()函数
            // 当接收到所有数据，触发end事件后，其回调函数调用请求路由，并将数据传递给route()函数
        });

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