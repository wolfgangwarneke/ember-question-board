import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createUser() {
      var params = {
        username: this.controller.get('username'),
        firstname: this.controller.get('firstname'),
        lastname: this.controller.get('lastname')
      };
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
