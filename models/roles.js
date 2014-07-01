/**
 * Created by adronhall on 6/20/14.
 * Description: Management of roles.
 */

var alfadir = {
    name: 'alfadir',
    read: 'true',
    write: 'true',
    delete: 'true'
};
var readwritedelete = {
    name: 'readwritedelete',
    read: 'true',
    write: 'true',
    delete: 'true'
};
var readonly = {
    name: 'readonly',
    read: 'true',
    write: 'false',
    delete: 'false'
};
var writeonly = {
    name: 'writeonly',
    read: 'false',
    write: 'true',
    delete: 'false'
};
var readwriteonly = {
    name: 'readwriteonly',
    read: 'true',
    write: 'true',
    delete: 'true'
};

var roles = {
    List: [
        alfadir,
        readwritedelete,
        readonly,
        writeonly,
        readwriteonly
    ]};

module.exports = roles;
