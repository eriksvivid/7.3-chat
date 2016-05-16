var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var ChatComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
        <ul className="message-list">
          <li className="message-list-item">
            <span className="user-name">{this.props.model.get('username')}</span>
            <span className="message-content"> {this.props.model.get('content')}</span>
            <span className="created-at"></span>
          </li>
        </ul>
    )
  }
});

var ChatListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var messages = this.props.collection.map(function(model){
      return (
        <ChatComponent model={model} key={model.get('_id')}/>
      )
    });
    var messaged = messages.reverse();
      return (
        <div className="chat-window">
          {messaged}
        </div>
      )
  }
});




module.exports = {
  ChatComponent: ChatComponent,
  ChatListing: ChatListing
};
