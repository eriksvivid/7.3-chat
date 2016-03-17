var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "messaging": "messaging"
  },
  index: function(){

  }
});

var router = new Router();

Backbone.history.start();
