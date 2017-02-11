import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  session: Ember.inject.service('session'),
  Resolver,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});

loadInitializers(App, config.modulePrefix);

export default App;

