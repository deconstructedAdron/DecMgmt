/**
 * Created by adron on 6/19/14.
 * Description: Basic tests for the data ring.
 */

var data_ring = require('../data/ring');

describe('data ring', function () {
    it('should get key value', function () {
        data_ring.kv_get().should.eql('kv_get');
    });
    it('should set key value', function () {
        data_ring.kv_set().should.eql('kv_set');
    })
})
