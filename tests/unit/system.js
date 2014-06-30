/**
 * Created by adron on 6/29/14.
 * Description: Test to verify that the system settings are correct.
 */

//localhost:1337

/**
 * Created by adronhall on 6/23/14.
 * Description: API Integration test for apikeys. Currently does not implement passport security.
 */

var should = require('should');

describe('System', function () {
    describe('globals', function () {
        it('should have the SYSTEM_URI set', function () {
            process.env.SYSTEM_URI.should.exist;
        });
        it('should be set to appropriate URI for tests', function () {
            var uri = process.env.SYSTEM_URI;
            if (uri === 'http://localhost:1337') {
                uri.should.eql('http://localhost:1337');
            } else if (uri === 'http://deconstructed-env-test.elasticbeanstalk.com') {
                uri.should.eql('http://deconstructed-env-test.elasticbeanstalk.com');
            } else if (uri === 'http://deconstructed-accounts.elasticbeanstalk.com') {
                uri.should.eql('http://deconstructed-accounts.elasticbeanstalk.com');
            } else {
                uri.should.eql('this failed, URI needs set');
            }
        })
    })
});