/**
 * Created by adronhall on 6/20/14.
 * Description: Fake ring for testing.
 */

var groups = 'accounts.groups';
var users = 'accounts.users';
var apikeys = 'accounts.apikeys';
var roles = 'accounts.roles';

var FAKE_RING = {};

FAKE_RING.search = function (collection, query) {
    return 'search';
}

FAKE_RING.kv_get = function (collection, key) {
    if(collection === users)



    return 'kv_get';
}

FAKE_RING.kv_set = function (collection, key, value) {
    return 'kv_set';
}

FAKE_RING.gr_get = function (collection, key, relation) {
    return 'gr_get';
}

FAKE_RING.gr_set = function (collection, key, relation, toCollection, toKey) {
    return 'gr_set';
}

module.exports = FAKE_RING;