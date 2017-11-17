import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Component.extend({
	store: service(),

	actions: {
		borrar(proyecto){
			let con = this;
			new Promise(function (res, rej) {
				con.get('store').findAll('asignacion').then((arr)=>{
					let deleteAsig = arr.filterBy('proyecto.id', proyecto.get('id'));
					deleteAsig.forEach((asig)=>{
						asig.destroyRecord();
					})
				});
				res();
				
			}).then(()=>{
				proyecto.destroyRecord();
				window.Materialize.toast('Borrado', 2000) //
				window.$('#modal1').modal('close')

			})
			
			
			
		},
		guardar(proyecto){

			proyecto.validate().then(({validations})=>{

		    	if(validations.get('isValid')){
		        	proyecto.save();
					window.Materialize.toast('Guardado', 2000) //
					window.$('#modal1').modal('close')

		        }
		        else{
		        	window.Materialize.toast('Datos invalidos', 2000) //

		        }
		      })
		}
	}
});
