import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    saveProyecto(proyecto){
      proyecto.save()
      this.set('model.proyecto', this.get('store').createRecord('proyecto'))
    }
  }
});
