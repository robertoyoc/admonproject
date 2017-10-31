import DS from 'ember-data';

export default DS.Model.extend({

  proyecto: DS.belongsTo('proyecto'),
  criterio: DS.belongsTo('criterio'),
  calificacion: DS.attr('number')

});
