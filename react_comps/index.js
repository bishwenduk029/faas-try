"use strict"
var React = require('react');
var ReactDOMServer  = require('react-dom/server');
var App = require('./app');

module.exports = (context, callback) => {
    var html = ReactDOMServer.renderToStaticMarkup(<App />);
    callback(undefined, {text: html});
}
