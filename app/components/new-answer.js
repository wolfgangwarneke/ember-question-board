import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerQuestion() {
      var timestamp = new Date();
      timestamp = timestamp.toJSON();
      var params = {
        main: this.get('answer'),
        timestamp: timestamp,
        question: this.get('question'),
        username: this.get('answerUserName')
      };
      this.sendAction('answerQuestion', params);
    }
  }
});
