/**
 * Created by adronhall on 6/20/14.
 *Description: basic tests for the roles DTO/Business Logic.
 */

var Roles = require('../models/roles');
var FAKE_RING = require('../tests/FAKE.data.ring');
var should = require('should');

describe('The roles', function () {
    it('should have 5 different roles.', function () {
        var roles = Roles.List;
        roles.length.should.eql(5);
    });
})

