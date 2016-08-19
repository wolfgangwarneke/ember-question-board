import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    signOut(user) {
      user.active = false;
      user.save();
      this.transitionTo('index');
    }
  }
});
