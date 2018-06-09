"use strict"
import ReactDOMServer from 'react-dom/server';
import App from './app';

module.exports = (context, callback) => {
    var html = ReactDOMServer.renderToStaticMarkup(<App />);
    callback(undefined, {text: html});
}
