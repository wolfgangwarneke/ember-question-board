import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr(),
  additional_notes: DS.attr()
  // date: DS.attr()
});
