/**
 * Created by adronhall on 6/23/14.
 * Description: API Test Calls for users calls.
 */

var should = require('should');
var test_globals = require('test-globals');
var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;

describe('API Calls for users', function () {
    describe('to users API function end points', function () {
        it('should return a 200 success.', function (done) {
            routes.get('/users')
                .auth(username, password)
                .expect(200, done)
        });

        it('should return a 200 success.', function (done) {
            routes.post('/users/search')
                .auth(username, password)
                .expect(200, done)
        });
    })
});
