import Ember from "ember";

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll("post");
  },

  afterModel: function() {
    Ember.run.scheduleOnce("afterRender", this, function() {
      let post = Ember.$('.feed-post');

      for (let i = 0; i < post.length; i++) {
        let postImg = Ember.$('.feed-post-img', post[i]);
        let imageContent = Ember.$('.image-content', post[i]);

        setHeight(post[i], 500, false);

        imageContent.load(function () {
          setHeight(post[i], postImg.outerHeight(true), true);
        });

        // if (!postImg.length) {
        //   setHeight(post[i], 500);
        // }
      }
    });
  }
});

function setHeight(post, height, isImage) {
  let postText = Ember.$('.feed-post-text', post);
  let postHeader = Ember.$('.feed-post-header', post);
  let postP = Ember.$('p', post);

  let maxBlockHeight = height - postHeader.outerHeight(true);
  let paddings = parseInt(postText.css("padding-top")) + parseInt(postText.css("padding-bottom"));

  if (postP.height() > maxBlockHeight - paddings) {
    let maxLineCount = ((maxBlockHeight - paddings) / parseInt(postP.css("line-height")) |0);
    let maxTextHeight = maxLineCount * parseInt(postP.css("line-height"));

    postP.css("max-height", maxTextHeight);
  }
  if (maxBlockHeight - paddings - postP.height() <= parseInt(postP.css("line-height")) && isImage) {
    postText.css("height", maxBlockHeight);
  }
}