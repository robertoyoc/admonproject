import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    year: DS.attr('number'),
    asdasd: DS.hasMany('asdasd'),
    padre: DS.belongsTo('asdasd')

});
