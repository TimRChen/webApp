/**
 * @file 主入口组件
 * @author <huangjiandong>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selected">
                <div className="input"></div>
                <div className="selected-box"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />
    , document.getElementById('container')
);