(function() {
  'use strict';
  var date = 'August 29, 2018';
  var day;
  var sundayDate = new Date();

  function dayInfo(date) {
    try {
      var anyDate = new Date(date);
      var d = anyDate.getDay();

      switch (d) {
        case 0:
          day = "Sunday";
          console.log(date + ' is ' + day);
          break;
        case 1:
          day = "Monday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
          break;
        case 2:
          day = "Tuesday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
          break;
        case 3:
          day = "Wednesday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
          break;
        case 4:
          day = "Thursday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
          break;
        case 5:
          day = "Friday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
          break;
        case 6:
          day = "Saturday";
          sundayDate.setDate(anyDate.getDate() - d);
          console.log(date + ' is ' + day + ' and the corresponding Sunday date is ' + sundayDate);
      }
    } catch (err) {
      alert('Invalid Date is Passed ' + err.message);
    }

  }

  dayInfo(date);
})();