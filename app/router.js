import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("feed");
  this.route("comments", {path: "/feed/:post_id"});
  this.route("profile");
  this.route("login");
});

export default Router;
