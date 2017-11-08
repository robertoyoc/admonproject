import Ember from 'ember';

export default Ember.Route.extend({


  model(){

    return Ember.RSVP.hash({
      proyectos: this.get('store').findAll('proyecto'),
      proyecto: this.get('store').createRecord('proyecto')
    });
  }
});
