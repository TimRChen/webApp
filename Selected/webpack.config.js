/**
 * @file 文件打包编译配置文件
 * @author <huangjiandong>
 */

var webpack = require('webpack');

module.exports = {
    // 对象形式配置入口
    entry: {
        index: './index'
    },
    // 输出文件出口
    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },
    // 定义对模块的处理逻辑
    module: {
        // 加载器
        loaders: [
            {test: /\.jsx$/, loaders: 'babel-loader', query: {presets: ['react', 'es2015']}},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx', '.json']
    }
};
