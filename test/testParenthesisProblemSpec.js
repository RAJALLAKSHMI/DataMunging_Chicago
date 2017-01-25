const should = require("chai").should(),
     expect = require("chai").expect,
        paranthesis = require("../js/ParenthesisProblem");

describe("Test for sequence of paranthesis", function(err) {
    it("should return true since every paranthesis are closed", function(done) {
        var result = paranthesis('{{{{}}}}{}{}{}{}{}{}{}{}{}{}{{{}}}');
        expect(result).to.be.equal(true);
        done();
    });
    it("should return false since the parentheses are not closed", function(done) {
        var result = paranthesis('{}{');
        result.should.be.equal(false);
        done();
    });
    it("should return true since a sequence of parentheses are closed", function(done) {
        var result = paranthesis('{{{{}}}}{}{}{}{{}{}{}{}{}{}{}{{{}}}}');
        result.should.be.equal(true);
        done();
    });
    it("should return false because the parentheses are misplaced", function(done) {
        var result = paranthesis('}{');
        result.should.be.equal(false);
        done();
    });
    it("should return true since it follows the sequence of parentheses", function(done) {
        var result = paranthesis('{{{{{{{{}}}}}}}}');
        result.should.be.equal(true);
        done();
    });
});
