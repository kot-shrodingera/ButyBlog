import Ember from "ember";

export default Ember.Route.extend({

  afterModel: function() {
    Ember.run.scheduleOnce("afterRender", this, function() {
      let post = Ember.$('.full-post');

      let postImg = Ember.$('.full-post-img');
      let imageContent = Ember.$('.image-content');

      Ember.$('#full-post-bg-1').css("height", Ember.$('.full-post-text').outerHeight());
      Ember.$('#full-post-bg-1').css("width", Ember.$('.display-center').width());

      imageContent.load(function () {
        setBGSize(post, postImg.outerHeight(true), postImg.outerWidth(true));
      });
    });
  }
});

function setBGSize(post, height, width) {
  let bg1 = Ember.$('#full-post-bg-1');
  let bg2 = Ember.$('#full-post-bg-2');
  let fullWidth = Ember.$('.display-center').width();
  let pPaddingLeft = parseInt(Ember.$('p', post).css('padding-left'));
  let textHeight = Ember.$('.full-post-text').outerHeight();

  if (height && width) {
    bg1.css("height", Math.min(height, textHeight));
    bg1.css("width", fullWidth - width + pPaddingLeft);
    if (textHeight > height) {
      bg2.css("top", height - pPaddingLeft);
      bg2.css("height", textHeight - height + pPaddingLeft);
    }
  }
}