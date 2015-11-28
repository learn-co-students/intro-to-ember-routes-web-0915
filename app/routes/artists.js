import Ember from 'ember';

export default Ember.Route.extend({
    model(){
      return [
        Ember.Object.create({name: "Kanye West"}),
        Ember.Object.create({name: "Lady Gaga"})
      ];
    },
    actions: {
      addArtist(newArtist){
        this.modelFor(this.routeName).pushObject(Ember.Object.create({name: newArtist}));
        this.controller.set('newArtist', '');

      }

    }

});
