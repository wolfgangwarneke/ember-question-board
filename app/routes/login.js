import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: null,
  model() {
    return this.store.findAll('user');
  },
  actions: {
    login(model) {
      var loginName = this.controller.get('userlogin');
      var searchedNames = [];
      var self = this;
      var flag = false;
      var counter = 0;
      model.forEach(function(user) {
        counter ++;
      });
      model.forEach(function(user) {
        console.log(user.get('username'));
        searchedNames.push(user.get('username'));
        if (user.get('username') === loginName && !flag) {
          console.log("Login matches");
          flag = true;
          user.active = true;
          user.save();
          self.sessionUser = user;
        } else {
          counter --;
          if (counter === 0 && !flag) {
            console.log("User not found");
            var failureMessage = "You're user name was not found, would you like to sign up?";
            if (confirm(failureMessage)) {
              self.transitionTo('signup');
            }
          }
        }
      });
    }
  }
});
