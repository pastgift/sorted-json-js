# sorted-json-js

Sort keys and array elements in a JSON.

## Quick Example:

```js
var sortedJSON = require('sorted-json');

var obj = {
  numberArray: [3, 1, 2],
  anotherJSON: {
    stringArray: ['cat', 'book', 'apple'],
    numberA: 2,
    numberB: 1
  },
  number1: 2,
  number2: 1
};

var sortedObj = sortedJSON.sortify(obj);
console.log(JSON.stringify(sortedObj, null, '  '));

/* Output:
  {
    "anotherJSON": {
      "numberA": 2,
      "numberB": 1,
      "stringArray": [
        "apple",
        "book",
        "cat"
      ]
    },
    "number1": 2,
    "number2": 1,
    "numberArray": [
      1,
      2,
      3
    ]
  }
*/
```

# Functions:

### sortify(obj [, options])

###### obj (object)

The object to sort

###### options (object)

An object which defaults to

```js
{
  sortBy   : null,  // Specifies a function that defines the sort order. Same to `compareFunction` parameter in `Array.prototype.sort(compareFunction)`
  sortKey  : true,  // Sort the keys in `obj` or not
  sortArray: true,  // Sort the array elements in `obj or not

  stringify: false, // Output the stringified `obj` or not (Using `JSON.stringify()`)
  replacer : null,  // Parameter for `JSON.stringify()`
  space    : null,  // Parameter for `JSON.stringify()`
}
```

### stringify(obj, compareFunction) ***DEPRECATED***

###### obj (object)

The object to sort

###### compareFunction (function)

Specifies a function that defines the sort order. Same to `compareFunction` parameter in `Array.prototype.sort(compareFunction)`.

# Install:

```shell
npm install sorted-json
```

# Test:

```shell
npm test
```

# License

[MIT](LICENSE)

[downloads-image]: http://img.shields.io/npm/dm/sorted-json.svg

[npm-url]: https://npmjs.org/package/sorted-json
[npm-image]: http://img.shields.io/npm/v/sorted-json.svg
