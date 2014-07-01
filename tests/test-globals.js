/**
 * Created by adronhall on 6/23/14.
 * Description: Global Variables for integration tests.
 */

var supertest = require('supertest');

test_globals = {
    username: 'allfather',
    password: 'blagh',
    routes: supertest(process.env.SYSTEM_URI)
};

module.exports = test_globals;