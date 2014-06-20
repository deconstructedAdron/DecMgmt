/**
 * Created by adron on 6/19/14.
 * Description: Object that will handle user interactions.
 */


var users = {};

users.blaghdblagh = function blaghdWoah() {

}

// sample of what should/needs to match for the api token to work with things...
// to be deleted and replaced with real codes.
users.getUsers = function () {
    var users_sample_stuffs = [
        { id: 2, username: 'adron', name: 'Adron Hall', password: 'hgalb!', email: 'adron@deconstructed.io'},
        { id: 3, username: 'public', password: 'blagh', email: 'public@deconstructed.io' }
    ];
    return users_sample_stuffs;
}
module.exports = users;
