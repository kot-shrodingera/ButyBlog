export function initialize(container, application) {
  application.inject('session:custom', '_store', 'store:main');
}

export default {
  name: 'session-store',
  after: 'ember-data',
  initialize: initialize
};