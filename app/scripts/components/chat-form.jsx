
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var ChatForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  addContent: function(e){
    e.preventDefault();
    var contentAdd = this.$el.serializeObject();
    this.props.collection.create(contentAdd);
  },
  render: function(){
    return (
        <form className="chat-form">
          <input className="username" name="username" type="text" placeholder="Username"/>
          <input className="input" name="content" type="text" placeholder="Message"/>
          <button id="submit-button" className="btn btn-primary" type="submit" onClick={this.addContent}>Send</button>
        </form>
    )
  }
});


module.exports = ChatForm;
