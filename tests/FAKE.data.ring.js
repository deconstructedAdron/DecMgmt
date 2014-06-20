/**
 * Created by adronhall on 6/20/14.
 * Description: Fake ring for testing.
 */

var collection = 'deconstructed';
var groups = 'accounts.groups';
var users = 'accounts.users';
var apikeys = 'accounts.apikeys';

var FAKE_RING = {};

FAKE_RING.search = function (query) {
    return 'search';
}

FAKE_RING.kv_get = function (key) {
    return 'kv_get';
}

FAKE_RING.kv_set = function (key, value) {
    return 'kv_set';
}

FAKE_RING.gr_get = function (key, relation) {
    return 'gr_get';
}

FAKE_RING.gr_set = function (key, relation, toCollection, toKey) {
    return 'gr_set';
}

module.exports = FAKE_RING;