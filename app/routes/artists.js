import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var artists = [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
		return artists;
	},

	actions: {

		addArtist: function(artistName){
			var model = this.modelFor(this.routeName);
			model.pushObject(Ember.Object.create({name: artistName}));
			this.controller.set('artistName', '');
		}

	}
});
