import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
  },

  actions: {
    addArtist: function(newArtist){
      var newArtistObj = Ember.Object.create({name: newArtist});
      this.modelFor(this.routeName).pushObject(newArtistObj)
      this.get('controller').set('newArtist', '');
      // let model = this.modelFor(this.routeName);
      //this.routeName === 'artist'
    }
  }
});
