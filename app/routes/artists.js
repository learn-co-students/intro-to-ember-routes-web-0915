import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
  },
  actions: {
    addArtist: function(data){
      let model = this.modelFor(this.routeName);
      var newArtist = Ember.Object.create({name: data});
      model.pushObject(newArtist);
      this.controller.set('artistName', '');
    }
  }
});
