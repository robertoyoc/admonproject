import Ember from 'ember';
import { computed } from "@ember/object";

export default Ember.Controller.extend({

	np: computed('model.proyectos', function () {
		return this.get('model.proyectos.length') * 2 -1
	})
});
