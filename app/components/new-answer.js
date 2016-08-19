import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerQuestion() {
      var timestamp = new Date();
      timestamp = timestamp.toJSON();
      var params = {
        main: this.get('answer'),
        timestamp: timestamp,
        question: this.get('question')
      };
      this.sendAction('answerQuestion', params);
    }
  }
});
