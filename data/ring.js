/**
 * Created by adron on 6/19/14.
 */

var orchestrator = require('orchestrate');
var collection = 'deconstructed';
var groups = 'accounts.groups';
var users = 'accounts.users';
var apikeys = 'accounts.apikeys';

var ring = {};

ring.kv_get = function () {
    return 'kv_get';
}

ring.kv_set = function () {
    return 'kv_set';
}

ring.gr_get = function () {
    return 'gr_get';
}

ring.gr_set = function () {
    return 'gr_set';
}

module.exports = ring;