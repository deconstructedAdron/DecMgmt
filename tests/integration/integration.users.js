/**
 * Created by adronhall on 6/23/14.
 * Description: API Test Calls for users calls.
 */

var should = require('should');
var test_globals = require('../test-globals');
var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;

var Users = require('../../models/users');
var roles = require('../../models/roles');
var data_ring = require('../../data/ring');

var users = new Users(data_ring);
var base_uri = '/users';

describe('API Calls for users', function () {
    describe('to users API function end points', function () {
        it('should return a 200 success calling /users', function (done) {
            routes.get(base_uri)
                .auth(username, password)
                .expect(200, done)
        });

        it('should return a 200 success calling /users/search', function (done) {
            routes.post(base_uri + '/search')
                .auth(username, password)
                .expect(200, done)
        });

//        it('should add a user and get a response of the identifier created', function(done){
//            users.add(user.username, user.password, user.name, user.email)
//                .then(function (result){
//                    result.body.ID;
//                    done();
//                })
//        })
    })
});
