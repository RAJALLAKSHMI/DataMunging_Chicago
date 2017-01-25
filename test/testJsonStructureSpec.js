let chai = require('chai');
let expect = chai.expect;
let jsonDiff = require('./jsondiff');
let totalObjectKeys = require('./totalObjectKeys');
let expectedJSON = require('./expecteddata/chicagoCrime1.json');
let actualJSON = require('../outputdata/assault.json');
describe ('Test Application as Blackbox', function() {
    it ('Test JSON is well formed', function(done) {
        /* ToDO Parse JSON*/
        done();
    });
    it ('JSON has expected Number of Objects', function(done) {
        let objMatrix = totalObjectKeys.traverse(actualJSON);
        expect(objMatrix.totalNoObjects).to.not.equal(0);
        expect(objMatrix.totalNoKeys).to.not.equal(0);
        done();
    });
    it (' Test JSON is as expected ', function(done) {
        let compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);
        expect(compareResult.diffs).equal(0);
        done();
    });
});
