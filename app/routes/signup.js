import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createUser() {
      console.log(this);
      var params = {
        username: this.controller.get('username'),
        firstname: this.controller.get('firstname'),
        lastname: this.controller.get('lastname')
      };
      console.log(params);
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
