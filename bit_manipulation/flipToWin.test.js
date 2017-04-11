'use strict';
var expect = require('chai').expect;
var assert = require('assert');
var sinon = require('sinon');
var { getMax, flipToWin } = require('./flipToWin.js');

describe('Flip a bit to win', function() {
  let input;
  it('should not call getMax for 0', function() {
    let getMaxSpy = sinon.spy(getMax);
    input = 0;
    input <<= 31;
    let answer = flipToWin(input);
    assert(getMaxSpy.notCalled);
    expect(answer).to.equal(1);
  });
  it('should not call getMax for 1', function() {
    let getMaxSpy = sinon.spy(getMax);
    input = 1;
    let answer = flipToWin(input);
    assert(getMaxSpy.notCalled);
    expect(answer).to.equal(1);
  });
  let expectedLst = [
    [ 5, 3 ],
    [ 15, 4 ],
    [ 1775, 8 ]
  ];
  new Map(expectedLst).forEach((value, key) => {
    let input = key;
    let output = value;
    it(`should return ${output} for ${input}`, function() {
      let getMaxSpy = sinon.spy(getMax);
      let answer = flipToWin(input);
      assert(getMaxSpy.notCalled);
      expect(answer).to.equal(output);
    });
  });
});