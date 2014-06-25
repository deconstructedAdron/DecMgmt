/**
 * Created by adronhall on 6/20/14.
 * Description: apikey management.
 */

var apikeys = function apikeys(ring) {
    this.ConnectionRing = ring;
};

apikeys.ConnectionRing = {};

apikeys.prototype.getUser = function (username, password) {

}

apikeys.prototype.getRole = function (username, password) {

}

apikeys.prototype.add = function (username, password) {
    // if user is in admin role then ...
}

module.exports = apikeys;