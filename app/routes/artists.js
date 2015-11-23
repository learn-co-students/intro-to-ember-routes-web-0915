import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
  },
  actions: {
    addArtist: function(artistName){
      let model = this.modelFor(this.routeName);
      let obj = Ember.Object.create({name: artistName});
      model.pushObject(obj);
      this.get("controller").set('artistName', '');
    }
  }
});

