/**
 * Created by adronhall on 6/23/14.
 * Description: Testing for calls to routes.
 * Notes: This file assumes that the application is running locally at localhost:1337 and calls are
 *   made against the actual API.
 * HTTP Status codes: Located @ http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * Superagent Info: Located @ http://visionmedia.github.io/superagent/docs/test.html
 * Great Blog Entry & Series: Located @ http://www.marcusoft.net/2014/02/mnb-supertest.html
 * Supertest: Located @ https://github.com/visionmedia/supertest
 */

var should = require ('chai').should ();
var test_globals = require ('../tests-integration/integration-globals');
var username = test_user.username, password = test_user.password, routes = test_globals.routes;

describe ('API Calls', function () {

    describe ('to Blitz.io URI', function () {
        it ('should return a 200 success.', function (done) {
            routes.get ('/mu-41acf44f-894ab026-ac5e0f6d-75c032d0')
                .expect (200, done)
        });
    })

    describe ('to stat URI', function () {
        it ('should return 401 unauthorized', function (done) {
            routes.get ('/stat')
                .expect (401, done)
        })

        it ('should auth and 200 authorized', function (done) {
            routes.get ('/stat')
                .auth (username, password)
                .expect (200, done)
        })
    })
});
