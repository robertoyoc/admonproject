import Ember from 'ember';
import { inject as service } from '@ember/service';


export default Ember.Component.extend({
	store: service(),


	init(){
		this._super(...arguments);

		let cProyecto = this.get('proyecto');
		let cCriterio = this.get('criterio');

		this.get('store').findAll('asignacion').then((arr)=>{
			let potenciales = arr.filterBy('proyecto.id', cProyecto.get('id'));
			let asignacion = potenciales.filterBy('criterio.id', cCriterio.get('id'))

			if(!this.get('isDestroyed')){
				if(!Ember.isEmpty(asignacion))
					this.set('asignacion', asignacion.get('firstObject'));
				else{
					this.set('asignacion', this.get('store').createRecord('asignacion', {
						proyecto: this.get('proyecto'),
						criterio: this.get('criterio')
					}));
				}
			}
		});


		

	}
});
