/**
 * Created by adronhall on 6/23/14.
 * Description: Global Variables for integration tests.
 */

var supertest = require('supertest');
var roles = require('../models/roles');

test_globals = {
    username: 'allfather',
    password: 'blagh',
    routes: supertest(process.env.SYSTEM_URI),

    user1: {
        username: 'batman',
        password: 'batsecrets',
        name: 'Bruce Wayne',
        email: 'bruce@themanor.com'
    },
    user2: {
        username: 'ironman',
        password: 'iron',
        name: 'Tony Stark',
        email: 'tony@starktower.com'
    },

    readonly_role: roles.List.readonly,
    readwrite_role: roles.List.readwriteonly,
    alfadir_role: roles.List.alfadir,

    apikey_a_4user1: {
        apikey: 'eacabf10-4760-4ec1-b984-d0bbefa1d16f',
        email: 'bruce@themanor.com',
        role: this.alfadir_role
    },
    apikey_b_4user1: {
        apikey: 'ed2e4db5-af64-435c-878d-7e00b341b160',
        email: 'bruce@themanor.com',
        role: this.readonly_role
    },
    apikey_b_4user2: {
        apikey: 'ed2e4db5-af64-435c-878d-7e00b341b160',
        email: 'iron@man.com',
        role: this.readonly_role
    }
};

module.exports = test_globals;

