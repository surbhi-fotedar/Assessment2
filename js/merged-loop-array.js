(function() {
  'use strict';
  var arr = [2, 3, 4, 5, 6, 7];
  var newArr = [];

  function mergeArray(arr) {
    var arrLength = arr.length;

    for (var i = 0; i < arrLength; i++) {
      newArr[i] = arr[i];
    }
    console.log(newArr.concat(arr));
  }

  mergeArray(arr);
})();