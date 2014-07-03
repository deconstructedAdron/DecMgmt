/**
 * Created by adronhall on 6/23/14.
 * Description: API Integration test for apikeys. Currently does not implement passport security.
 */

var test_globals = require('../test-globals');
var username = test_globals.username, password = test_globals.password, routes = test_globals.routes;
var ApiKeys = require('../../models/apikeys');
var data_ring = require('../../data/ring');

var apikeys = new ApiKeys(data_ring);
var base_uri = '/apikeys';

describe('API Calls for apikeys', function () {

    it('should return 200 for listing by user', function (done) {
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
    it('should return 200 after adding a key', function (done) {
        test_globals.routes.post(base_uri + '/add')
            .auth(username, password)
            .expect(200, done)
    });


//    it('should create an apikey', function (done){
//        apikeys.add(test_globals.username, test_globals.password)
//            .then(function(){
//                apikeys.getKeys(test_globals.username, test_globals.password)
//                    .then(function(result){
//                        var r = result;
//                        r.should.exist;
//                        done()
//                    })
//            })
//    })


    it('should add the apikey and return the UUID/GUID of the newly created key', function () {
        apikeys.add(test_globals.username, test_globals.password, role)
            .then(function (result) {
                var thing = result;

                thing.should.exist;
            })
    })

    it('should return a 200 success after deleting a key', function (done) {
        test_globals.routes.post(base_uri + '/delete')
            .auth(username, password)
            .expect(200, done)
    });
});