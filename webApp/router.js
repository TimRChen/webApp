/**
 * @author <huangjiandong>
 * @file NodeJs 路由
 */

let route = (handle, pathname) => {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No request handle for ' + pathname);
        return '404 Not found';
    }
};


exports.route = route;