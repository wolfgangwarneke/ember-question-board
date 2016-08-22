import Ember from 'ember';

export function dateDisplay(params) {
  var dateJSON = params[0];
  var dateWithDashes = dateJSON.slice(0,10);
  var dateArray = dateWithDashes.split('-');
  return dateArray[1] + "/" + dateArray[2] + ", " + dateArray[0];
}

export default Ember.Helper.helper(dateDisplay);
