import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    deleteCriterio(criterio){
      criterio.destroyRecord()
    },
    saveAndContinue(model){
      model.forEach((criterio)=>{
        criterio.save().then(()=>{
          this.transitionToRoute('regProyecto')
        })
      })
    }
  }
});
