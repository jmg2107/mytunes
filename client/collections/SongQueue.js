// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
    console.log('playFirst');
    this.at(0).play();
  },

  initialize: function(){
    //add event listener here
    var addSong = this.on('add', function() {
      if (this.length === 1) {
        console.log('add triggered');
        this.playFirst();
      }
    });

    var endSong = this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length) {
        console.log('ended triggered');
        this.playFirst();
      }
    });

    var dequeueSong = this.on('dequeue', function() {
      console.log('dequeue');
      this.pop();
    })
  }

});
