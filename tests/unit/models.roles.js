/**
 * Created by adronhall on 6/20/14.
 *Description: basic tests for the roles DTO/Business Logic.
 */

var Roles = require('../../models/roles');

describe('The business logic roles', function () {
    it('should have 5 different roles.', function () {
        var roles = Roles.List;
        roles.length.should.eql(5);
    });
})
