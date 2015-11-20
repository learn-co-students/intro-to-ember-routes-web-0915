import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
    // return this.store.findAll('artist');
    },
  actions: {
    addArtist: function(artistName) {
      this.modelFor(this.routeName).pushObject(Ember.Object.create({name: artistName}));
      // debugger;
      // $('input.new-artist').val("");
      this.controller.set('artistName','');
    }
  }
});
