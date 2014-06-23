/**
 * Created by adronhall on 6/23/14.
 * Description: API Test Calls for users calls.
 */

var should = require ('chai').should ();
var supertest = require ('supertest');
var routes = supertest ('http://localhost:1337');
var test_user = require ('../tests-integration/integration-globals');
var username = test_user.username, password = test_user.password;

describe ('API Calls', function () {
    describe ('to users API function end points', function () {
        it ('should return a 200 success.', function (done) {
            routes.get ('/users')
                .auth (username, password)
                .expect (200, done)
        });

        it ('should return a 200 success.', function (done) {
            routes.post ('/users/search')
                .auth (username, password)
                .expect (200, done)
        });
    })
});
