(function() {
  'use strict';
  var str = 'Level';

  function checkPalindrome(str) {
    // The logic can be simplified
    try {
      var checkstr = str.toLowerCase();
      var strLength = str.length;

      for (var i = 0; i < Math.floor(strLength / 2); i++) {
        if (checkstr[i] !== checkstr[strLength - 1 - i]) {
          return false;
        }
      }
      return true;
    } catch (err) {
      alert(err.message);
    }
  }
  if (checkPalindrome(str) == true) {
    console.log('The String is Palindrome');
  } else {
    console.log('Not a palindrome');
  }
})();