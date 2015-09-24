import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    authenticate: function(){
      this.get("session").authenticate("authenticator:custom", {identification: this.get("identification"), password: this.get("password")});
    }
  }
});