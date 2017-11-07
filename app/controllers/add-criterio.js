import Ember from 'ember';
const categories =[
{nombre: "Menor"},
{nombre: "Mayor"}
];

export default Ember.Controller.extend({
  categories,
  actions: {
    save(criterio){
      let Controller =this;
      criterio.save().then(()=>{
        Controller.transitionToRoute('criterio')
      })
    }
  }
});
