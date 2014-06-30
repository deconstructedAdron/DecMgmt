/**
 * Created by adronhall on 6/20/14.
 * Description: Basic unit tests for the users model.
 */
var Users = require('../../models/users');
var data_ring = require('../../data/ring');
var users = new Users(data_ring);

describe('The business logic for users', function () {
    it('should exist when instantiated with a ring connection.', function () {
        users.should.exist;
    });
    it('should have a connection that is the same as the passed connection.', function () {
        users.ConnectionRing.should.eql(data_ring);
    });
});