// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: "table",

  initialize: function() {
    this.listenTo(this.collection, 'add', function() {
      this.render();
    });
    this.listenTo(this.collection, 'dequeue', function() {
      this.render();
    });
    this.listenTo(this.collection, 'ended', function() {
      this.render();
    });
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html("<th> Song Queue </th>")
    .append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      }));
  },

  setCollection: function(collection) {
    console.log('set collection running');
    this.collection = collection;
    this.render();
  }

});
