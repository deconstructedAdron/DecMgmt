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

apikeys.prototype.getUser = function (username, password) {

}

apikeys.prototype.get = function (username, password) {
    var collection = this.ConnectionRing.collections.apikeys;
    return this.ConnectionRing.kv_get(collection, username);
}

apikeys.prototype.add = function (username, password) {
    var collection = this.ConnectionRing.collections.apikeys;
    var key = chance.guid();
    var value = {apikey: chance.guid(), username: username};

    return this.ConnectionRing.kv_set(collection, key, value);
}

module.exports = apikeys;