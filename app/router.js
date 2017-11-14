import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('proyecto');
  this.route('criterio', {path: "/criterios"} );
  this.route('addCriterio', {path: "/nuevo"});
  this.route('regProyecto', {path: "/proyectos"});
  this.route('asigValores');
  this.route('matDecision');
});

export default Router;
