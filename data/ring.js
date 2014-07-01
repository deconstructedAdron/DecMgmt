/**
 * Created by adron on 6/19/14.
 * Description: Data tier for managing in and out w/ Orchestrate.
 */

var db = require('orchestrate')(process.env.ORCHESTRATE_API_KEY);

var ring = {
    collections: {
        users: 'accounts.users',
        apikeys: 'accounts.apikeys',
        groups: 'accounts.groups'
    }
};

ring.search = function (collection, query) {
    return db.search(collection, query);
}

ring.kv_get = function (collection, key) {
    return db.get(collection, key);
}

ring.kv_set = function (collection, key, value) {
    return db.put(collection, key, value);
}

ring.gr_get = function (collection, key, relation) {
    return 'gr_get';
}

ring.gr_set = function (collection, key, relation, toCollection, toKey) {
    return 'gr_set';
}

module.exports = ring;