import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var artists = [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
    return artists;
  },
  actions:{
    addArtist: function(artist){
      var new_artist = Ember.Object.create({name: artist});
      this.modelFor('artists').pushObject(new_artist);
      this.get('controller').set('artistName', '');
    }
  }
});
