/**
 * Created by Adron on 6/19/14.
 * Description: Adding configuration for the project.
 * License: Apache 2.0 => License: Apache 2.0 => https://github.com/Deconstructed/DecMgmt/blob/master/LICENSE
 */

var convict = require('convict');

// Schema
var conf = convict({
    env: {
        doc: "The App Environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 1337,
        env: "PORT"
    }
});

// load environment dependent configuration
var env = conf.get('env');

// perform validation
conf.validate();

module.exports = conf;