console.log('Hello Webpack Project.');
import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './app';
 
ReactDOM.render(<App title={'React with Webpack and Babel :)'}/>, document.getElementById('app'));
module.hot.accept();
