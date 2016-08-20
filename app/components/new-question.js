import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion() {
      var timestamp = new Date();
      timestamp = timestamp.toJSON();
      var params = {
        main: this.get('question'),
        additional_notes: this.get('notes'),
        timestamp: timestamp,
        user: this.get('user')
      };
      this.sendAction('askQuestion', params);
    }
  }
});
