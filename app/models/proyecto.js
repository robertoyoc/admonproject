import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    descripcion: DS.attr('string'),
    costo: DS.attr('number')

});
