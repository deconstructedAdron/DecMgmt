/**
 * Created by adronhall on 6/20/14.
 * Description: basic tests for the groups DTO/Business Logic.
 */

var Groups = require('../models/apikeys');
var FAKE_RING = require('../tests/FAKE.data.ring');
var should = require('should');

describe('The groups', function () {
    it('should exist when instantiated with a ring connection.', function () {
        var groups = new Groups(FAKE_RING);
        groups.should.exist;
    });
    it('should have a connection that is the same as the passed connection.', function () {
        var groups = new Groups(FAKE_RING);
        groups.ConnectionRing.should.eql(FAKE_RING);
    });
})

