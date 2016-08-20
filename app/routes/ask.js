import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    console.log(params.user_id);
    return this.store.findAll('user');
  },

  actions: {
    askQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
