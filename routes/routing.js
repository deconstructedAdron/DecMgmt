/**
 * Created by adron on 6/19/14.
 * Description: Routing.
 * License: Apache 2.0 => License: Apache 2.0 https://github.com/Deconstructed/Storgie/blob/master/LICENSE
 */

// Passport Security
var passport = require ('passport');
var BasicStrategy = require ('passport-http').BasicStrategy;
var UserManagement = require ('../models/users');
var data_ring = require('../data/ring');

// *********************************************************************************************************************
// Temporary Users - This whole section needs ported out to the database.
// *********************************************************************************************************************
var users = new UserManagement(data_ring).getUsers();

function findByUsername (username, fn) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.username === username) {
            return fn (null, user);
        }
    }
    return fn (null, null);
}

passport.use (new BasicStrategy ({
    },
    function (username, password, done) {
        process.nextTick (function () {
            findByUsername (username, function (err, user) {
                if (err) {
                    return done (err);
                }
                if (!user) {
                    return done (null, false);
                }
                if (user.password != password) {
                    return done (null, false);
                }
                return done (null, user);
            })
        });
    }
));

var routing = exports;

routing.load_routes = function (app) {
    // *********************************************************************************************************************
    // Setup passport security.
    // *********************************************************************************************************************
    app.use (passport.initialize ());

    // *********************************************************************************************************************
    // Site Route Mapping
    // *********************************************************************************************************************
    app.get ('/mu-41acf44f-894ab026-ac5e0f6d-75c032d0', function (req, res) {
        res.send ('42');
    });

    // *********************************************************************************************************************
    // Device API Route Mapping
    // *********************************************************************************************************************
    // curl -v -u public:blagh http://localhost:1337/stat
    app.get ('/stat',
        passport.authenticate ('basic', { session: false}),
        function (req, res) {
            res.send({status: 'live'});
        });

    // *********************************************************************************************************************
    // Site Route Mapping
    // *********************************************************************************************************************
    // curl -v http://localhost:1337
    // localhost:1337
    app.get ('/', function (req, res) {
        res.render ('index', { title: 'Management Interface Will Go Here!!!  WOOP' });
    });
}
