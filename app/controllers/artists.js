import Ember from 'ember';

export default Ember.Controller.extend({
  artists: ["Kanye", "Lady Gaga"],
  actions: {
    addArtist: function(){
      let artistName = this.get('artistName');
      this.get('artists').pushObject(artistName);
    }
  }
});
