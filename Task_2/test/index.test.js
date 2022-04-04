// var expect = require("chai").expect;
import { expect } from "chai";
import findBestMatch from "../index.js";
import { findMatch } from "../index.js";

describe('Closest number test', function () {
  it("should return 24", () => expect(findBestMatch(22, [10, 15, 18, 24, 38])).to.equal(24));
  it("should return -5", () => expect(findBestMatch(-5, [10, -5, 18, 24, 38])).to.equal(-5));
  it("should return 100", () => expect(findBestMatch(105, [10, 15, 18, 100, 38])).to.equal(100));
  it("should return -6", () => expect(findBestMatch(-7, [-1, -2, -3, -4, -5, -6, - 23, -54, 101, 6, 7, 8])).to.equal(-6));
})

describe('Closest number test', function () {
  it("should return 24", () => expect(findMatch(22, [10, 15, 18, 24, 38])).to.equal(24));
  it("should return -5", () => expect(findMatch(-5, [10, -5, 18, 24, 38])).to.equal(-5));
  it("should return 100", () => expect(findMatch(105, [10, 15, 18, 100, 38])).to.equal(100));
  it("should return -6", () => expect(findMatch(-7, [-1, -2, -3, -4, -5, -6, - 23, -54, 101, 6, 7, 8])).to.equal(-6));

})