/**
 * @author <huangjiandong>
 * @file 用于处理路由对应的请求
 */

let exec = require('child_process').exec;
let querystring = require('querystring');
let formidable = require('formidable');
let fs = require('fs');


/**
 * 上传文件, 将文件进行post传递
 * 
 * @param {Object} response response对象， 响应请求
 * @param {Object} request request对象, 处理HTTP请求的细节
 */
let start = (response, request) => {
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


/**
 * 解析文件，保存文件并将图片展示
 * 
 * @param {Object} response response对象， 响应请求
 * @param {Object} request request对象, 处理HTTP请求的细节
 */
let upload = (response, request) => {
    console.log('Request handler "upload" was called.');

    let form = new formidable.IncomingForm();
    console.log('about to parse.');
    form.uploadDir = 'upload';
    form.parse(request, (error, fields, files) => {
        if (error) {
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write(error + '\n');
            response.end();
        } else {
            console.log('parsing done.');
            console.log(files.upload.path);

            fs.renameSync(files.upload.path, "./" + form.uploadDir + "/test.png");
            // 确保该文件保存成/tmp/test.png, 采用fs.renameSync(path1,path2)来实现
            // 该方法是同步执行

            response.writeHead(200, {"Content-Type":"text/html"});
            response.write("Receive image: </br>");
            response.write("<img src='/show' />");
            response.end();
        }
    });
};


/**
 * 展示文件
 * 
 * @param {Object} response response对象， 响应请求
 * @param {Object} request request对象, 处理HTTP请求的细节
 */
let show = (response, request) => {
    console.log('Request handle "show" was called.');
    fs.readFile('./upload/test.png', 'binary', (error, file) => {
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