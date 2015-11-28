import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})]
  },

  actions:{
    addArtist: function(artistName){
      let model = this.modelFor(this.routeName);
      model.pushObject(Ember.Object.create({name: artistName}))
      // $(".new-artist").val("")
      this.controller.set('artistName', '');
    }
  }


});
