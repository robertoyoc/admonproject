import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('proyecto');
  this.route('criterio');
  this.route('addCriterio');
  this.route('regProyecto');
  this.route('asigValores');
});

export default Router;
