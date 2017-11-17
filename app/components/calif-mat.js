import Ember from 'ember';
import { inject as service } from '@ember/service';
export default Ember.Component.extend({
	store: service(),

	init(){
		this._super(...arguments)
		let proyectos = this.get('proyectos')
		let order;
		this.get('store').findAll('asignacion').then((arr)=>{
				order = arr.filterBy('criterio.id', this.get('criterio.id')).sortBy('calificacion')

				if(this.get('criterio.cal')==0){
					//mejor calificacion al menor
					let init = order.get('length')*2-1;
					order.forEach((el)=>{
						el.set('eq', init);
						init = init - 2;
					});
				}
				else{
					//mejor calificacion al mayor
					let init = 1;
					order.forEach((el)=>{
						el.set('eq', init);
						init = init + 2;
					});
				}
				return arr;

			}).then((arr)=>{
				proyectos.forEach((proyecto)=>{
					let evalu = arr.filterBy('proyecto.id', proyecto.get('id'));
					let total = 0;
					evalu.forEach((as)=>{
						total = total + as.get('eq') * as.get('criterio.valor')/100;
					})
					proyecto.set('total', total.toFixed(2));
					proyecto.save();
				})

			}).then(()=>{
				this.get('store').findAll('proyecto').then((ar)=>{
					let sortedArray = ar.sortBy('total');

					let init = sortedArray.get('length');
					sortedArray.forEach((arr)=>{
						arr.set('prioridad', init);
						init = init -1;
						arr.save();
					})
				})
			})


		
	}
});
