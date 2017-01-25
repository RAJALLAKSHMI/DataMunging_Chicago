const should = require("chai").should();
const expect = require("chai").expect,
    Stringvalidations = require("../js/StringValidation");

describe("A series of test for String validations", function(err) {
    it("should find the string length ", function(done) {
        var result = Stringvalidations("sumit");
        result.should.be.equal(5);
        done();
    });

    it("should ", function(done) {
        var result = Stringvalidations("");
        result.should.be.equal(0);
        done();
    });
    it("should ", function(done) {
        var result = Stringvalidations("");
        expect(result).to.be.empty;
        done();
    });
    it("should only accept String value", function(done) {
        var result = Stringvalidations();
        expect(result).to.be.String;
        done();
    });

});
