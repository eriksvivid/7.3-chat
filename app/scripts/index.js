var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/messages.js');
var ChatForm = require('./components/chat-form.jsx');
var ChatList = require('./components/chat-list.jsx');
var User = require('./components/user.jsx');

var chatCollection = new models.ChatCollection();
var ChatApp = ChatList.ChatListing;

ReactDOM.render(
    React.createElement(User, {collection: chatCollection}),
    document.getElementById('header')
);

ReactDOM.render(
    React.createElement(ChatApp, {collection: chatCollection}),
    document.getElementById('message-list-container')
);

ReactDOM.render(
  React.createElement(ChatForm, {collection: chatCollection}),
  document.getElementById('chat-form-con')
);
