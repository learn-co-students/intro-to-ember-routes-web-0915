import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
  },

  actions: {
    addArtist: function(artistName){
      let model = this.modelFor(this.routeName);
      let newArtist = Ember.Object.create({name: artistName});
      model.pushObject(newArtist);
      this.controller.set('artistName', '');
    }
  }
});
