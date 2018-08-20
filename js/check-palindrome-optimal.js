(function() {
  'use strict';

  function isPalindrome(value) {
    try {
      var temp = value.toLowerCase();
      if (temp === temp.split('').reverse().join('')) {
        console.log(value + ' is a palindrome');
      } else {
        console.log(value + ' is not a palindrome');
      }
    } catch(error) {
      console.log('Enter a valid string value');
    }
  }

  isPalindrome('Level');

})();