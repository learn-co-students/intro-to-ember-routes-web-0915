import Ember from 'ember';

export default Ember.Route.extend({
  // 1
  model: function(){
    return Ember.Object.create({totalPresses: 0})
  },
  actions: {
    // 2
    incrementPresses: function(){
      // 3
      let model = this.modelFor(this.routeName);
      // 4
      model.incrementProperty('totalPresses');
    }
  }
});