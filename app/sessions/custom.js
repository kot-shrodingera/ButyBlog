import Session from "simple-auth/session";
import Ember from "ember";

export default Session.extend({

  toggleAuth: Ember.observer("isAuthenticated", function() {
    this.set("currentUser", this.get("secure.user"));
  })
  
});