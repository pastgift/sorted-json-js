# sorted-json-js
a sorting-keys-versiong for `JSON.stringify`

## Quick Example

```js
sortedJSON = require('sorted-json-js');

obj = {
  d: [1.1, false, 'abc'],
  c: {
    cc: [1, true, function(){}],
    cb: 2,
    ca: 1
  },
  b: 2,
  a: 1
};

console.log(sortedJSON.stringify(obj));

// Output: `{"a":1,"b":2,"c":{"ca":1,"cb":2,"cc":[1,true,"<FUNCTION>"]},"d":[1.1,false,"abc"]}`
```

### Install:
```shell
npm install sorted-json
```

### License
[MIT](LICENSE)

[downloads-image]: http://img.shields.io/npm/dm/sorted-json.svg

[npm-url]: https://npmjs.org/package/sorted-json
[npm-image]: http://img.shields.io/npm/v/sorted-json.svg