### webApp 基于NodeJs搭建
    目标实现功能：用户可以通过浏览器使用我们的应用。
    当用户请求http://domain/start时，可以看到一个欢迎页面，页面上有一个文件上传的表单。
    用户可以选择一个图片并提交表单，随后文件将被上传到http://domain/upload，该页面完成上传后会把图片显示在页面上。
### 如何开始
    在终端下输入node index 命令即可启动服务器，在浏览器中输入http://localhost:8080/start 即可跳转到预期页面
### 覆盖技术点
    1.服务端JavaScript

    2.函数式编程: 函数作为参数传递使用

    3.阻塞与非阻塞: 解决阻塞方法: 使用exec(), 因为exec()的操作是异步的, 这里不是好的方式。正确的非阻塞处理是将response对象通过路由传递到请求处理程序。

    4.回调: 服务器参数是一个回调函数，可采用匿名或提前声明的方式

    5.事件: request对象上注册监听器listener, 参数有data事件（表示新的小数据块到达了）以及end事件（表示所有的数据都已经接收完毕）。

    6.内部和外部模块: 
                 内部模块: 
                        1.http
                        2.exec 通过 child_process引入 
                        3.url 
                        4.querystring 
                        5.fs 
                 外部模块: formidable