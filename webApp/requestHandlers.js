/**
 * @author <huangjiandong>
 * @file 用于处理路由对应的请求
 */

let exec = require('child_process').exec;
let querystring = require('querystring');
let formidable = require('formidable');
let fs = require('fs');

let start = (response, postData) => {
    console.log('Request handler "start" was called.');
    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html"' +
        'charset="UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';
    
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
};

let upload = (response, postData) => {
    console.log('Request handler "upload" was called.');
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent:" + querystring.parse(postData).text);
    response.end();
};

let show = (response, postData) => {
    console.log('Request handle "show" was called.');
    fs.readFile('./tmp/test.png', 'binary', (error, file) => {
        if (error) {
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write(error + '\n');
            response.end();
        } else {
            response.writeHead(200, {"Content-Type":"image/png"});
            response.write(file, 'binary');
            response.end();
        }
    });
};


exports.start = start;
exports.upload = upload;
exports.show = show;