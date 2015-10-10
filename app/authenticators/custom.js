import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  store: Ember.inject.service(),

  tokenEndpoint: config.apiURL + "/api/v1/users/sign_in",

  restore(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    var _this = this;
    var data = {};
    data["user"] = {
      password: options.password
    };
    data["user"]["email"] = options.identification;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         _this.tokenEndpoint,
        type:        'POST',
        data:        data,
      }).then(function (response){
        let currentUser = _this.get("store").push(response.user);
        resolve({ 
          token: response.auth_token,
          email: response.user_email,
          user: currentUser
        });
      }, function (xhr) {
        reject( xhr.error() );
      });
    });
  },

  invalidate() {
    return Ember.RSVP.resolve({});
  }
});