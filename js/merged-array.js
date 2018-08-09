(function() {
  'use strict';
  var arr = [2, 3, 4];

  function mergeArray(arr) {
    var arrLength = arr.length;
    console.log(arrLength);

    for (var i = 0; i < arrLength; i++) {
      arr[i + arrLength] = arr[i];
    }
    console.log(arr);
  }

  mergeArray(arr);
})();