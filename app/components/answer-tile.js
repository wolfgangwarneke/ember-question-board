import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
