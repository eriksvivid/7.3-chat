var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ChatApp = require('./components/index.js');

ReactDOM.render(
  React.createElement(ChatApp),
  document.getElementById('app')
);
