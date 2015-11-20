import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return [Ember.Object.create({name: "Kanye West"}), Ember.Object.create({name: "Lady Gaga"})];
	},
	actions: {
		addArtist: function(data){
			let model = this.modelFor(this.routeName);
			var new_artist = Ember.Object.create({});
			new_artist.name = data;
			model.pushObject(new_artist);
			jQuery('.ember-text-field').val(''); // is there a better way?
		}
	}
});
