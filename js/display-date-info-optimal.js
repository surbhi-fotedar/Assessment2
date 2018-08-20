(function() {
  'use strict';

  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function getDayOfWeek(value) {
    if (value >= 0 && value < 7) {
      console.log(daysOfWeek[value]);
      return daysOfWeek[value];
    } else {
      console.log('The day is not valid');
    }
  }

  function findSundayDate(value, dayNumber) {
    try {
      value.setDate(value.getDate() - dayNumber);
      return value;
    } catch (error) {
      console.log(error);
    }
  }

  function displayDateInfo(value) {
    try {
      value = new Date(value);
      var d = value.getDay();

      if (d === 0) {
        console.log(value + 'is a Sunday');
        return;
      } else {
        console.log(value + ' is ' + getDayOfWeek(d) + ' and the corresponding Sunday date is ' + findSundayDate(value, d));
      }
    } catch (error) {
      console.log(error);
    }
  }

  displayDateInfo('August 29, 2018');

})();