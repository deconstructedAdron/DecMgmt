/**
 * Created by adronhall on 6/20/14.
 * Description:
 */
var Users = require ('../models/users');
var FAKE_RING = require ('../tests/FAKE.data.ring');
var should = require ('should');

var users = new Users (FAKE_RING);

describe ('The users', function () {
    it ('should exist when instantiated with a ring connection.', function () {
        users.should.exist;
    });
    it ('should have a connection that is the same as the passed connection.', function () {
        users.ConnectionRing.should.eql (FAKE_RING);
    });
})

describe ('The users to authenticate', function () {

    // { id: 2, username: 'adron', name: 'Adron Hall', password: 'hgalb!', email: 'adron@deconstructed.io'},


    it ('should return a user record to auth with a username, password and appropriate properties.', function () {
        users.authByUserPassword ().id.should.exist;

    })
})

describe ('The users to verify API key', function () {
    // { id: 2, username: 'adron', name: 'Adron Hall', password: 'hgalb!', email: 'adron@deconstructed.io'},


    it ('should return a user API key list similar to that above.', function () {
        users.authByUserPassword ().id.should.exist;

    })
})
