import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		search(toSearch){
			let projects = [];
			this.get('model').forEach((proyecto)=>{
				if(toSearch>=proyecto.get('costo')){

					projects.push(proyecto);
					toSearch = toSearch-proyecto.get('costo');
				}
			});
			this.set('todoProjects', projects);
		}
	}
});
