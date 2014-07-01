/**
 * Created by adronhall on 6/20/14.
 * Description: basic tests for the apikeys DTO/Business Logic.
 */

var ApiKeys = require('../../models/apikeys');
var data_ring = require('../../data/ring');

describe('The business logic for API keys', function () {
    // Test variables
    var test_valid_email = 'someplace@blagh.com';
    var test_bad_email = 'b@';
    var apikeys = new ApiKeys(data_ring);

    it('should exist when instantiated with a ring connection.', function () {
        apikeys.should.exist;
    });
    it('should have a connection that is the same as the passed connection.', function () {
        apikeys.ConnectionRing.should.eql(data_ring);
    });
    it('should generate an API Key with all appropriate elements', function () {
        var key_identifier = apikeys.generate(test_valid_email);
        key_identifier.apikey.should.exist;
        key_identifier.email.should.exist;
    })
    // I need to figure out how the hell to get this to work!!!!
    //    it('should fail on generation if the email address is not valid.', function(){
    //        assert.throws(apikeys.generate(test_bad_email), Error, "Must have a valid email when generating an API key.");
    //
    //        expect(apikeys.generate(test_bad_email)).to.throw(new Error, /valid email/);
    //
    //
    //        expect(iThrowError).to.throw(/Error thrown/);
    //        expect(iThrowError).to.throw(Error, /Error thrown/);
    //        expect(iThrowError).to.throw(new Error('Error thrown'));
    //    })
})