import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Controller.extend({


	np: computed('model.proyectos', function () {
		console.log(this.get('model.length'))
		return this.get('model').length;
	}),
});
