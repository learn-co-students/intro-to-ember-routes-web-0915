import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.Object.create({totalPresses:0});
  },
  actions:{
    incrementPresses: function(){
      let model = this.modelFor(this.routeName);
      model.incrementProperty('totalPresses');
    }
  }
});
