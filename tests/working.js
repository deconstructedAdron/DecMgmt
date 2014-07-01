/**
 * Created by adron on 6/19/14.
 * Description: The quick test and test framework check.
 */

describe('Testing frameworks', function () {
    var thingToTest = 'something';
    it('should work.', function () {
        thingToTest.should.eql("something");
    })
})
