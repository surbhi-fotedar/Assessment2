(function() {
  'use script';
  var firstObject = {
    name: 'JavaScript',
    type: 'Basic'
  };

  var secondObject = {
    name: 'JavaScript',
    type: 'Basic'
  };

  function compareObjects(firstObject, secondObject) {
    if (firstObject === secondObject) {
      console.log('The 2 objects are similar');
    } else {
      console.log('The two Objects are not similar');
    }
  }

  compareObjects(firstObject, secondObject);



})();