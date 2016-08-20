import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('ask', {path: '/ask/:user_id'});
  this.route('question', {path: '/question/:question_id'});
  this.route('signup');
  this.route('login');
  this.route('logout');
  this.route('signout', {path: '/signout/:user_id'});
});

export default Router;
