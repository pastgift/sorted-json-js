'use strict'

var DEBUG = false;
var NON_SORTABLE_TYPES = ['undefined', 'string', 'number', 'boolean', 'function'];
var DEFAULT_SORT_OPTIONS = {
  sortBy   : null,
  sortKey  : true,
  sortArray: true,

  stringify: false,
  replacer : null,
  space    : null,
};

var _sortify = function(obj, options) {
  for (var i = 0; i < NON_SORTABLE_TYPES.length; i++) {
    if (NON_SORTABLE_TYPES[i] === typeof obj || obj === null) {
      return obj;
    }
  }

  if (Array.isArray(obj)) {
    if (options.sortArray === true) {
      obj.sort(options.sortBy);
    }

    for (var i = 0; i < obj.length; i++) {
      obj[i] = _sortify(obj[i], options);
    }

    return obj;

  } else {
    if (options.sortKey === true) {
      var sortedObj = {};
      var keyList = [];

      for (var k in obj) {
        keyList.push(k);
      }
      keyList.sort(options.sortBy);

      for (var i = 0; i < keyList.length; i++) {
        var k = keyList[i];
        var v = obj[k];

        sortedObj[k] = _sortify(v, options);
      }

      return sortedObj;

    } else {
      for (var k in obj) {
        obj[k] = _sortify(obj[k], options);
      }

      return obj;
    }
  }
};

exports.sortify = function(obj, options) {
  if (!options) {
    options = DEFAULT_SORT_OPTIONS;

  } else {
    for (var k in DEFAULT_SORT_OPTIONS) {
      if (typeof options[k] === 'undefined') {
        options[k] = DEFAULT_SORT_OPTIONS[k];
      }
    }
  }

  var result = _sortify(obj, options);
  if (options.stringify === true) {
    result = JSON.stringify(result, options.replacer, options.space);
  }

  return result;
};

/* Deprecated Code below */
var _stringify = function(obj, compareFunction) {
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

exports.stringify = function(obj, compareFunction) {
  console.log("The stringify() function is DEPRECATED. Please use sortify() instead.");

  return _stringify(obj, compareFunction);
};

