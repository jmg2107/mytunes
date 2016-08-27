// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: "table",

  initialize: function() {
    this.listenTo(this.collection, 'add', function() {
      console.log(JSON.stringify(this.collection));
      window.localStorage.setItem('songQueue', JSON.stringify(this.collection));
      this.render();
    });
    this.listenTo(this.collection, 'dequeue', function() {
      window.localStorage.setItem('songQueue', JSON.stringify(this.collection));
      this.render();
    });
    this.listenTo(this.collection, 'ended', function() {
      window.localStorage.setItem('songQueue', JSON.stringify(this.collection));
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
