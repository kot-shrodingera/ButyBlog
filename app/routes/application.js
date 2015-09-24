import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  render: function() {
    this._super();
    Ember.run.scheduleOnce("afterRender", this, function() {

      Ember.$('#menu-button').click(function() {
        Ember.$('nav').toggleClass('active');
      });

      Ember.$('.content').click(function() {
        if (Ember.$('nav').hasClass('active')) {
          Ember.$('nav').removeClass('active');
        }
      });

    });
  }
});

