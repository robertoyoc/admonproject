import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  selectedProyecto: null,
  actions: {
    saveProyecto(proyecto){

      proyecto.validate().then(({validations})=>{

        if(validations.get('isValid')){
          proyecto.save()
          window.Materialize.toast('Guardado!', 2000);
          this.set('model.proyecto', this.get('store').createRecord('proyecto'))

        }
        else{
          if(proyecto.get('validations.attrs.nombre.isInvalid'))
            window.$('#pname').addClass('invalid')
        }
      })
    },
    modalProyecto(proyecto){
      this.set('selectedProyecto', proyecto);
      window.$('#modal1').modal('open')

    },
    asigValores(proyecto){
      proyecto.destroyRecord();
      this.transitionToRoute('asigValores');
    },
    criterio(proyecto){
      proyecto.destroyRecord();
      this.transitionToRoute('criterio')
    }
  }
});
