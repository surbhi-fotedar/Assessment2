(function() {
  'use strict';
  var date;
  try {
    date = new Date('August 31, 2018');
  } catch (err) {
    alert('Invalid Date Passed' + err.message);
  }
  var d = date.getDay();
  var day;
  var sundayDate = new Date();

  function dayInfo(date) {
    switch (d) {
      case 0:
        day = "Sunday";
        console.log(date + ' is ' + day);
        break;
      case 1:
        day = "Monday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
        break;
      case 2:
        day = "Tuesday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
        break;
      case 3:
        day = "Wednesday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
        break;
      case 4:
        day = "Thursday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
        break;
      case 5:
        day = "Friday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
        break;
      case 6:
        day = "Saturday";
        sundayDate.setDate(date.getDate() - d);
        console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
    }

  }

  dayInfo(date);
})();