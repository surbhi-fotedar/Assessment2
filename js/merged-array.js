(function() {
  'use strict';
  var arr = [2, 3, 4, 5, 6, 7];

  function mergedArray(arr) {
    var newArr = arr.concat(arr); // Parameter must be checked for the correct type before using concat
    console.log(newArr);
  }

  mergedArray(arr);
})();