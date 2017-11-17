import DS from 'ember-data';
import { buildValidations, validator} from 'ember-cp-validations';


const Validations = buildValidations({

	nombre: [
		validator('presence', true),
		validator('length', {
			min: 1,
			max: 10
		})
	],
	descripcion: validator('length', {
			min: 1,
			max: 255
	}),

});



export default DS.Model.extend(Validations, {
    nombre: DS.attr('string'),
    descripcion: DS.attr('string'),
    costo: DS.attr('number'),
    total: DS.attr('number'), 
    prioridad: DS.attr('number')

});
