import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('proyecto');
  this.route('criterio');
  this.route('addCriterio', {path: "/new"});
});

export default Router;
