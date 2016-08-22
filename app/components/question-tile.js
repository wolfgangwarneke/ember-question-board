import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      })
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      })
    }
  }
});
