/**
 * @author <huangjiandong>
 * @file NodeJs 路由
 */

let route = (handle, pathname, response, postData) => {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, postData);
    } else {
        console.log('No request handle for ' + pathname);
        response.writeHead(404, {"Content-Type":"text/plain"});
        response.write('404 Not found');
        response.end();
    }
};


exports.route = route;