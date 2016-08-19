import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr(),
  additional_notes: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany('answer', {async: true}) 
});
