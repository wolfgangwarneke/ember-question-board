import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    login(model) {
      var loginName = this.controller.get('userlogin');
      var searchedNames = [];
      var self = this;
      model.forEach(function(user) {
        console.log(user.get('username'));
        searchedNames.push(user.get('username'));
        if (user.get('username') === loginName) {
          console.log("Login matches");
        } else {
          console.log("User not found");
          self.transitionTo('signup');
        }
      });
    }
  }
});
