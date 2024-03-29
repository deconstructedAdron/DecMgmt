/**
 * Created by adronhall on 6/20/14.
 * Description: basic tests for the groups DTO/Business Logic.
 */

var Groups = require('../../models/apikeys');
var data_ring = require('../../data/ring');

describe('The business logic for groups', function () {
    it('should exist when instantiated with a ring connection.', function () {
        var groups = new Groups(data_ring);
        groups.should.exist;
    });
    it('should have a connection that is the same as the passed connection.', function () {
        var groups = new Groups(data_ring);
        groups.ConnectionRing.should.eql(data_ring);
    });
})

