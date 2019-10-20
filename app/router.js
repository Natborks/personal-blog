import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('CV');
  this.route('posts', function() {
    this.route('show', {path: '/post/:id'});
    this.route('new');
  });
});

export default Router;
