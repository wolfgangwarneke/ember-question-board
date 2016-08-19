import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('user', {active: true});
  },
  actions: {
    login(user) {
      alert('hello ' + user.name + "!");
    }
  }
});
