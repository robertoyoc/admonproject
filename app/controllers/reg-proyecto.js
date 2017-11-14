import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  selectedProyecto: null,
  actions: {
    saveProyecto(proyecto){
      proyecto.save()
      this.set('model.proyecto', this.get('store').createRecord('proyecto'))
    },
    modalProyecto(proyecto){
      this.set('selectedProyecto', proyecto);
      window.$('#modal1').modal('open')

    }
  }
});
