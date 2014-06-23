/**
 * Created by adronhall on 6/23/14.
 * Description: Global Variables for integration tests.
 */

var supertest = require ('supertest');

test_globals = {
    username: 'public',
    password: 'blagh',
    routes  : supertest ('http://localhost:1337')
};

module.exports = test_globals;