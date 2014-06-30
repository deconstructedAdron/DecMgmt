/**
 * Created by adron on 6/19/14.
 * Description: Basic integration tests for ring calls to Orchestrate.
 * Instructions:
 *      1. Execute w/ the ORCHESTRATE_API_KEY environment variable assigned to an appropriate key.
 *          Sample ORCHESTRATE_API_KEY=test_key node app.js
 *      2. Execute the integration tests.
 */

var data_ring = require('../data/ring');
var collection = 'test_collection';
var key = 'test_data';
var value = {
    like: 8
};

describe('data ring', function () {

    it('orchestrate api key should be available', function () {
        var key = process.env.ORCHESTRATE_API_KEY;
        key.should.exist;
    })

    it('should set a value', function (done) {
        data_ring.kv_set(collection, key, value)
            .then(function () {
                data_ring.kv_get(collection, key)
                    .then(function (result) {
                        result.body.like.should.eql(8);
                        done();
                    })
            })
    })

    it('should get a value', function (done) {
        data_ring.kv_get(collection, key)
            .then(function (result) {
                result.body.like.should.eql(8);
                done();
            })
    })
})
