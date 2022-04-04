// var expect = require("chai").expect;
import { expect } from "chai";
import findBestMatch from "../index.js";
import { findMatch } from "../index.js";

describe('Closest number test', function () {
  it("should return 24", () => expect(findBestMatch(22, [10, 15, 18, 24, 38])).to.equal(24));
  it("should return -5", () => expect(findBestMatch(-5, [10, -5, 18, 24, 38])).to.equal(-5));
  it("should return 100", () => expect(findBestMatch(105, [10, 15, 18, 100, 38])).to.equal(100));
})

describe('Closest number test', function () {
  it("should return 24", () => expect(findMatch(22, [10, 15, 18, 24, 38])).to.equal(24));
  it("should return -5", () => expect(findMatch(-5, [10, -5, 18, 24, 38])).to.equal(-5));
  it("should return 100", () => expect(findMatch(105, [10, 15, 18, 100, 38])).to.equal(100));
})