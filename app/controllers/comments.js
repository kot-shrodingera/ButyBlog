import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    addComment: function() {
      this.store.createRecord("comment", {
        message: this.get("commentText"),
        post: this.get("model")
      }).save();
      console.log(session.currentUser);
    },

    delComment: function(comment) {
      comment.destroyRecord();
      // comment.set("message", "changed").save();
    }
  }
});