'use strict'

exports.stringify = function(obj, compareFunction) {
  if (typeof obj == 'string') {
    return '"' + obj + '"';
  }
  else if (typeof obj == 'number') {
    return obj;
  }
  else if (typeof obj == 'boolean') {
    return obj;
  }
  else if (typeof obj == 'function') {
    return '"<FUNCTION>"';
  }
  else if (typeof obj == 'object') {
    if (Array.isArray(obj)) {
      var parts = [];
      for (var i = 0; i < obj.length; i++) {
        var v = exports.stringify(obj[i], compareFunction);
        parts.push(v);
      }

      return '[' + parts.join(',') + ']';
    }
    else {
      var keyList = [];
      for (var k in obj) {
        keyList.push(k);
      }
      keyList.sort(compareFunction);

      var parts = [];
      for (var i = 0; i < keyList.length; i++) {
        var k = keyList[i];
        var v = exports.stringify(obj[k], compareFunction);

        parts.push('"' + k + '":' + v);
      }
      return '{' + parts.join(',') + '}';
    }
  }
  else {
    return '"<UNKNOW>"';
  }
};
