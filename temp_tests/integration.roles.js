/**
 * Created by adronhall on 6/23/14.
 * Description: API Integration test for roles. Currently does not implement passport security.
 */

var should = require('should');
var test_globals = require('test-globals');
var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;

describe('API Calls for roles', function () {
    it('should have an active service', function () {

    })


//    var test_globals = require('test-globals');
//    var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;
//    var base_uri = '/apikeys';
//
//    describe('API Calls for apikeys', function () {
//
//        it('should return a 200 success for listing by user', function (done) {
//            test_globals.routes.post(base_uri)
//                .auth(username, password)
//                .expect(200, done)
//        });


});
