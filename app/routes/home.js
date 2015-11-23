import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    handleClick: function(argument){
      console.log(`You clicked ${argument}`);
    }
  }
});
