/**
 * Created by adron on 6/19/14.
 * Description: Basic integration tests for ring calls to Orchestrate.
 */

var data_ring = require('../data/ring');
var should = require('should');

var collection = 'test_collection';
var key = 'test_data';
var value = {
    some: 'test data',
    that: 'exists here',
    like: 8
};

describe('data ring', function () {

    it('orchestrate api key should be available', function () {
        var key = process.env.ORCHESTRATE_API_KEY;
        key.should.exist;
    })

    it('should set a value', function (done) {
        data_ring.kv_set(collection, key, value)
            .then(function (result) {
                result.should.eql('cheese');
                done();
            })
            .fail(function (err) {
                err.should.eql('failure');
                done();
            })
    })
})
