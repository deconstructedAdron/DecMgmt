/**
 * Created by adronhall on 6/20/14.
 * Description: apikey management.
 */

var Chance = require('chance');
var chance = new Chance();

var apikeys = function apikeys(ring) {
    this.ConnectionRing = ring;
};

apikeys.ConnectionRing = {};

apikeys.prototype.getUser = function (apikey) {

}

apikeys.prototype.get = function (username, password) {
    var collection = this.ConnectionRing.collections.apikeys;
    return this.ConnectionRing.kv_get(collection, username);
}

apikeys.prototype.add = function (username, password, role) {
    var collection = this.ConnectionRing.collections.apikeys;
    var key = chance.guid();
    var value = {apikey: chance.guid(), username: username, role: role};

    return this.ConnectionRing.kv_set(collection, key, value);
}

apikeys.prototype.generate = function (email) {
    if (email.length > 3) {
        var apikey = {
            apikey: chance.guid(),
            email: email
        }
        return apikey;
    } else {
        throw Error('Must have a valid email when generating an API key.');
    }
}

module.exports = apikeys;