/**
 * Created by adronhall on 6/23/14.
 * Description: API Integration test for apikeys. Currently does not implement passport security.
 */

var test_globals = require('test-globals');
var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;
var base_uri = '/apikeys';

describe('API Calls for apikeys', function () {
    describe('to API Keys', function () {
        it('should return a 200 success for listing by user', function (done) {
            test_globals.routes.post(base_uri)
                .auth(username, password)
                .expect(200, done)
        });
        it('should return at least one key for a user no matter what', function (done) {
            test_globals.routes.post(base_uri)
                .auth(username, password)
                .expect(200, done)
        });
        it('should return permissions with the returned key', function (done) {
            test_globals.routes.post(base_uri)
                .auth(username, password)
                .expect(200, done)
        });
        it('should return a 200 success after adding a key', function (done) {
            test_globals.routes.post(base_uri + '/add')
                .auth(username, password)
                .expect(200, done)
        });
        it('should return a 200 success after deleting a key', function (done) {
            test_globals.routes.post(base_uri + '/delete')
                .auth(username, password)
                .expect(200, done)
        });
    })
});