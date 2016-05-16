var $ = require('jquery');
var Backbone = require('backbone');

var ChatApp = Backbone.Model.extend({
});

var ChatCollection = Backbone.Collection.extend({
  model: ChatApp,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',

});

module.exports = {
  'ChatApp': ChatApp,
  'ChatCollection': ChatCollection
};
