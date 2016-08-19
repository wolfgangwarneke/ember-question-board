import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr(),
  timestamp: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
