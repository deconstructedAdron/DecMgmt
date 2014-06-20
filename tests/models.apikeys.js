/**
 * Created by adronhall on 6/20/14.
 * Description: basic tests for the apikeys DTO/Business Logic.
 */

var data_ring = require ('../models/apikeys');
var FAKE_RING = require ('../tests/FAKE.data.ring');
var should = require ('should');

describe ('The API keys', function () {
    it ('should exist when instantiated with a ring connection.', function () {
        var apikeys = new data_ring (FAKE_RING);
        apikeys.should.exist;
    });
    it ('should have a connection that is the same as the passed connection.', function () {
        var apikeys = new data_ring (FAKE_RING);
        apikeys.ConnProperties.should.eql (FAKE_RING);
    });
})
