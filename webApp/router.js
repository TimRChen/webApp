/**
 * @author <huangjiandong>
 * @file NodeJs 路由
 * 
 * @param {Object} handle 请求处理对象
 * @param {string} pathname 路由hash值
 * @param {Object} response response对象， 响应请求
 * @param {Object} request request对象, 处理HTTP请求的细节
 */

let route = (handle, pathname, response ,request) => {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } else {
        console.log('No request handle for ' + pathname);
        response.writeHead(404, {"Content-Type":"text/html"});
        response.write('404 Not found');
        response.end();
    }
};


exports.route = route;