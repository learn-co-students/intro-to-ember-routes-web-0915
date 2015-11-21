import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    var artists = [];
    var justin = Ember.Object.create({name: "Kanye West"});
    var gaga = Ember.Object.create({name: "Lady Gaga"});
    artists.push(justin);
    artists.push(gaga);
    return artists;
  },

  actions: {
    addArtist: function(newArtist){
        var newArtistToAdd = Ember.Object.create({name: newArtist});
        let model = this.modelFor(this.routeName);
        var newArray = model.pushObject(newArtistToAdd);
        this.controller.set('artistName', '');
        return newArray;
    }
  }
});
