/**
 * @author <huangjiandong>
 * @file 用于处理路由对应的请求
 */

let exec = require('child_process').exec;

let start = () => {
    console.log('Request handler "start" was called.');
    let content = 'empty';

    exec('ls -lah', (error, stdout, stderr) => {
        content = stdout;
    });

    return content;

    // return 'Hello Start.';
};

let upload = () => {
    console.log('Request handler "upload" was called.');
    return 'Hello Upload.';
};




exports.start = start;
exports.upload = upload;