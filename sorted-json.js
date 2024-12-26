'use strict'

var NON_SORTABLE_TYPES = ['undefined', 'string', 'number', 'boolean', 'function'];
var DEFAULT_SORT_OPTIONS = {
  sortBy   : undefined,
  sortKey  : true,
  sortArray: false,

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

var sortify = function(obj, options) {
  if (!options) {
    options = {};
  }

  for (var k in DEFAULT_SORT_OPTIONS) if (DEFAULT_SORT_OPTIONS.hasOwnProperty(k)) {
    var v  = DEFAULT_SORT_OPTIONS[k];

    if (!(k in options)) {
      options[k] = v;
    }
  }

  var result = _sortify(obj, options);
  if (options.stringify === true) {
    result = JSON.stringify(result, options.replacer, options.space);
  }

  return result;
};

var stringify = function(obj) {
  return sortify(obj, { stringify: true });
};

exports.sortify = sortify;
exports.stringify = stringify;
