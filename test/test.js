var assert = require('assert');
var sortedJSON = require('../sorted-json');

describe('main', function() {
  it('Sort string', function() {
    assert.equal(sortedJSON.sortify('string'), 'string');
  });

  it('Sort number(positive)', function() {
    assert.equal(sortedJSON.sortify(42) , 42);
  });

  it('Sort number(zero)', function() {
    assert.equal(sortedJSON.sortify(0)  , 0);
  });

  it('Sort number(negative)', function() {
    assert.equal(sortedJSON.sortify(-42), -42);
  });

  it('Sort boolean(true)', function() {
    assert.equal(sortedJSON.sortify(true), true);
  });

  it('Sort boolean(false)', function() {
    assert.equal(sortedJSON.sortify(false), false);
  });

  it('Sort function', function() {
    var func = function() {};
    assert.equal(sortedJSON.sortify(func), func);
  });

  it('Sort Array[number]', function() {
    var sortedObj = sortedJSON.sortify([4, 0, 3, 1, 2], {sortArray: true});
    for (var i = 0; i < 5; i++) {
      assert.equal(sortedObj[i], i);
    }
  });

  it('Sort Array[string]', function() {
    var sortedObj = sortedJSON.sortify(['e', 'd', 'c', 'a', 'b'], {sortArray: true});
    for (var i = 0; i < 5; i++) {
      assert.equal(sortedObj[i], String.fromCharCode(i + 'a'.charCodeAt()));
    }
  });

  it('Sort simple JSON', function() {
    var sortedObj = sortedJSON.sortify(
      {
          e: null,
          d: null,
          c: null,
          a: null,
          b: null,
      }
    );
    var idx = 0;
    for (var k in sortedObj) {
      assert.equal(k, String.fromCharCode(idx + 'a'.charCodeAt()));
      idx++;
    }
  });

  it('Sort nested JSON ([DEFAULT] sortKey, sortArray)', function() {
    var objToSort = {
      d: [5, 4, 2, 1, 3],
      b: ['c', 'b', {c: null, a: null, b: null}, 'a'],
      c: {c: null, a: null, b: null},
      a: null,
    };

    var expectedSortedJSON = {
      a: null,
      b: [{a: null, b: null, c: null}, 'a', 'b', 'c'],
      c: {a: null, b: null, c: null},
      d: [1, 2, 3, 4, 5],
    };
    assert.equal(JSON.stringify(sortedJSON.sortify(objToSort, {sortArray: true})), JSON.stringify(expectedSortedJSON));
  });

  it('Sort nested JSON (sortKey)', function() {
    var objToSort = {
      d: [5, 4, 2, 1, 3],
      b: ['c', 'b', {c: null, a: null, b: null}, 'a'],
      c: {c: null, a: null, b: null},
      a: null,
    };

    var expectedSortedJSON = {
      a: null,
      b: ['c', 'b', {a: null, b: null, c: null}, 'a'],
      c: {a: null, b: null, c: null},
      d: [5, 4, 2, 1, 3],
    };
    assert.equal(JSON.stringify(sortedJSON.sortify(objToSort, {sortKey: true, sortArray: false})), JSON.stringify(expectedSortedJSON));
  });

  it('Sort nested JSON (sortArray)', function() {
    var objToSort = {
      d: [5, 4, 2, 1, 3],
      b: ['c', 'b', {c: null, a: null, b: null}, 'a'],
      c: {c: null, a: null, b: null},
      a: null,
    };

    var expectedSortedJSON = {
      d: [1, 2, 3, 4, 5],
      b: [{c: null, a: null, b: null}, 'a', 'b', 'c'],
      c: {c: null, a: null, b: null},
      a: null,
    };
    assert.equal(JSON.stringify(sortedJSON.sortify(objToSort, {sortKey: false, sortArray: true})), JSON.stringify(expectedSortedJSON));
  });
});