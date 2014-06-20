/**
 * Created by adron on 6/19/14.
 * Description: Object that will handle API key management.
 */

var apikeys = function apikeys (conn) {
    this.ConnProperties = conn;
};

apikeys.ConnProperties = {};

module.exports = apikeys;