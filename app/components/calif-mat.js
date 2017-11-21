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

					order.reverse();

					//mejor calificacion al menor
					let init = 1;
					order.forEach((el,index)=>{
						el.set('eq', init);	
						if(order[index+1]){
							if(order[index+1].get('calificacion')!=el.get('calificacion')){
								init = init + 2;
							}
						}
												
					});
				}
				else{
					//mejor calificacion al mayor
					let init = 1;
					order.forEach((el,index)=>{
						el.set('eq', init);	
						if(order[index+1]){
							if(order[index+1].get('calificacion')!=el.get('calificacion')){
								init = init + 2;
							}
						}
												
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
