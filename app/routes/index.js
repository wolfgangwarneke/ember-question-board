import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    askQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      console.log(params);
      newQuestion.save();
      this.transitionTo('index');
    },
    answerQuestion(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
