/**
 * Created by adron on 6/19/14.
 * Description: Data tier for managing in and out w/ Orchestrate.
 */

var orchestrate = require ('orchestrate') (process.env.ORCHESTRATE_API_KEY);
var collection = 'deconstructed';
var groups = 'accounts.groups';
var users = 'accounts.users';
var apikeys = 'accounts.apikeys';

var ring = {};

ring.search = function (collection, query) {
    return 'search';
}

ring.kv_get = function (collection, key) {
    return 'kv_get';
}

ring.kv_set = function (collection, key, value) {
    return 'kv_set';
}

ring.gr_get = function (collection, key, relation) {
    return 'gr_get';
}

ring.gr_set = function (collection, key, relation, toCollection, toKey) {
    return 'gr_set';
}

module.exports = ring;