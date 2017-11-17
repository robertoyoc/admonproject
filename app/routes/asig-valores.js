import Ember from 'ember';
import { inject as service } from '@ember/service';

import { hash } from 'rsvp';


export default Ember.Route.extend({
	store: service(),

	model(){

		return hash({
			proyectos: this.get('store').findAll('proyecto'),
			criterios: this.get('store').findAll('criterio')

		})
	}
});
