# sorted-json-js

Sort keys and array elements in a JSON.

## Quick Example 1:

Using `.sortify(...)` with `{ sortArray: true }` options to sort an object:

```js
var sortedJSON = require('sorted-json');

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
```

Output:

```text
{
  anotherJSON: { numberA: 2, numberB: 1, stringArray: [ 'apple', 'book', 'cat' ] },
  number1: 2,
  number2: 1,
  numberArray: [ 1, 2, 3 ]
}
```

## Quick Example 2:

Using `.stringify(...)` to get a sorted JSON string:

```js
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
```

Output:

```text
{"anotherJSON":{"numberA":2,"numberB":1,"stringArray":["cat","book","apple"]},"number1":2,"number2":1,"numberArray":[3,1,2]}
```

# API:

### .sortify(obj [, options])

Sort an object and return it.

| Parameter           | Type     | Required | Default     | Description                                                                                                                      |
| ------------------- | -------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `obj`               | object   | Yes      |             | The object to sort                                                                                                               |
| `options`           | object   |          | `{}`        | Sort options                                                                                                                     |
| `options.sortBy`    | function |          | `undefined` | Specifies a function that defines the sort order. Same to `compareFunction` parameter in `Array.prototype.sort(compareFunction)` |
| `options.sortKey`   | boolean  |          | `true`      | Sort the keys in `obj` or not                                                                                                    |
| `options.sortArray` | boolean  |          | `true`      | Sort the array elements in `obj or not                                                                                           |
| `options.stringify` | boolean  |          | `false`     | Output the stringified `obj` or not (Using `JSON.stringify()`)                                                                   |
| `options.replacer`  |          |          |             | Parameter for `JSON.stringify()`                                                                                                 |
| `options.space`     |          |          |             | Parameter for `JSON.stringify()`                                                                                                 |

### .stringify(obj)

| Parameter | Type   | Required | Default | Description        |
| --------- | ------ | -------- | ------- | ------------------ |
| `obj`     | object | Yes      |         | The object to sort |

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
