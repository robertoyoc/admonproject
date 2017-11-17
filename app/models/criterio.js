import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  isCuantitativo: DS.attr('boolean', { defaultValue: true }),
  cal: DS.attr('string'),
  valor: DS.attr('string')

});
