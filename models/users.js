/**
 * Created by adron on 6/19/14.
 * Description: Object that will handle user interactions.
 */

var users = function (ring) {
    this.ConnectionRing = ring;
};

users.ConnectionRing = {};

users.prototype.put = function (user) {
    return '';
};

users.prototype.list = function (filter) {
    return '';
};

users.prototype.getUser = function (username, password) {
    return '';
};

users.prototype.getUsers = function (criteria) {

}

users.prototype.getApiKeys = function () {
    return 'listofapikeys';
}

users.prototype.addToRole = function (role) {

    return '';
}

users.prototype.authByUserPassword = function () {
    return 'authbyuserpassword';
}

users.prototype.authByApiKey = function () {
    return 'authbyapikey';
}

// sample of what should/needs to match for the api token to work with things...
// to be deleted and replaced with real codes.
users.prototype.getUsers = function () {
    var god_users = [
        {   id: 0,
            username: 'allfather',
            name: 'Odin',
            password: 'blagh',
            email: 'odin@deconstructed.io',
            apikey: 'JkF]]bmn)y1DoVApEvXGPPmz*_F4`b' }
    ];
    return god_users;
}
module.exports = users;
