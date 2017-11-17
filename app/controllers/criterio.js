import Ember from 'ember';

import { computed, observer} from '@ember/object';
import { equal } from '@ember/object/computed';


export default Ember.Controller.extend({
  store: Ember.inject.service(),
  porcentaje: computed('model.@each.valor', function () {
    let total=0;

    this.get('store').peekAll('criterio').forEach((criterio)=>{
        if(typeof(criterio.get('valor'))=='string'){
          total = total + parseInt(criterio.get('valor'))
        }        
      });
      return total;
  }),

  canContinue: equal('porcentaje', 100),

  save: observer('canContinue', function(){
    this.get('model').forEach((criterio)=>{
      criterio.save();
    })
  }),

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
    },
    addCriterio(){
      this.transitionToRoute('addCriterio')
    }
  }
});
