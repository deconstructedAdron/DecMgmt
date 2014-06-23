/**
 * Created by adronhall on 6/23/14.
 * Description: Testing for calls to routes.
 * Notes: This file assumes that the application is running locally at localhost:1337 and calls are
 *   made against the actual API.
 * HTTP Status codes: Located @ http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * Superagent Info: Located @ http://visionmedia.github.io/superagent/docs/test.html
 */


var should = require ('chai').should ();
var supertest = require ('supertest');
var routes = supertest ('http://localhost:1337');

var testuser = {username: 'public', password: 'blagh'};

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
                .auth ('public', 'blagh')
                .expect (200, done)
        })
    })
});
