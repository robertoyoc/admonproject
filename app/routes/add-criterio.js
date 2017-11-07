import Ember from 'ember';



export default Ember.Route.extend({
  store: Ember.inject.service(),
  idcri: null,

  model(){

    return this.get('store').createRecord('criterio', {});

  }
});
