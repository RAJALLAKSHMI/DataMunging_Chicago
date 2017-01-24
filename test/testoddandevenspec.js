const should = require("chai").should(),
     expect = require("chai").expect,
        oddandeven = require("../js/oddandeven");

describe("Test for oddandeven", function(err) {
    it("should return true since number is odd", function(done) {
        var result = oddandeven(5);
        expect(result).to.be.equal(true);
        done();
    });
    it("should return false since the number is not odd", function(done) {
        var result = oddandeven(8);
        result.should.be.equal(false);
        done();
    });


});
