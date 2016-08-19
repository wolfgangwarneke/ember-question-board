import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answers', {async: true})
});
