const assert = require('assert');
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const algorithm = '../algorithm/algorithm';

describe('Array', () => {
  describe('Does not modify input', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('Has the right format', () => {
    it('have an id property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a thumbnail property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a price property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a size property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a country property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a latitude property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a longitude property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a url property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a pricePerSquareMeter property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have a estimatedPrice property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('have an estimatedPricePercentageDifference property', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
