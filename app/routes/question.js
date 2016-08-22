import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findAll('user'),
      question: this.store.findRecord('question', params.question_id),
      showEditQuestion: false
    });
  },
  actions: {
    answerQuestion(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question.id);
    },
    toggleShowEditQuestion(model) {
      if (model.showEditQuestion) {
        this.controller.set("model.showEditQuestion", false);
      } else {
        this.controller.set("model.showEditQuestion", true);
      }
    },
    updateQuestion(question) {
      question.save();
      this.controller.set("model.showEditQuestion", false);
    }
  }
});
