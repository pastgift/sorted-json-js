var sortedJSON = require('./sorted-json');

var obj_1 = {
  numberArray: [3, 1, 2],
  anotherJSON: {
    stringArray: ['cat', 'book', 'apple'],
    numberA: 2,
    numberB: 1
  },
  number1: 2,
  number2: 1
};
console.log(sortedJSON.sortify(obj_1, { sortArray: true }));

var obj_2 = {
  numberArray: [3, 1, 2],
  anotherJSON: {
    stringArray: ['cat', 'book', 'apple'],
    numberA: 2,
    numberB: 1
  },
  number1: 2,
  number2: 1
};
console.log(sortedJSON.stringify(obj_2));
