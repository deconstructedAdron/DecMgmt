/**
 * Created by adronhall on 6/20/14.
 * Description: basic tests for the apikeys DTO/Business Logic.
 */

var ApiKeys = require('../../models/apikeys');
var data_ring = require('../../data/ring');

describe('The business logic for API keys', function () {
    it('should exist when instantiated with a ring connection.', function () {
        var apikeys = new ApiKeys(data_ring);
        apikeys.should.exist;
    });
    it('should have a connection that is the same as the passed connection.', function () {
        var apikeys = new ApiKeys(data_ring);
        apikeys.ConnectionRing.should.eql(data_ring);
    });
})

