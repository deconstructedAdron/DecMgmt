[ ![Codeship Status for Adron/DecMgmt](https://www.codeship.io/projects/187e44a0-da22-0131-66ef-729651b3c379/status)](https://www.codeship.io/projects/24263)

[![Dependencies](https://david-dm.org/Adron/Storgie.png)](http://david-dm.org/Adron/DecMgmt)
[![Code Climate](https://codeclimate.com/github/Adron/DecMgmt.png)](https://codeclimate.com/github/Adron/DecMgmt)

# DecMgmt

### Description

This project is the management interface for administering accounts, api keys, etc.

License: [Apache 2.0](https://github.com/Deconstructed/DecMgmt/blob/master/LICENSE)

 * [Issues List](https://github.com/Deconstructed/DecMgmt/issues)
 * [Huboard Kanban](https://huboard.com/Deconstructed/DecMgmt)

### Testing Notes

These tests are setup to run under certain conditions and in the flow of the continuous delivery. To run these tests the
command would look something like this.

Execute the app in one bash with the appropriate environment variables.

    ` ORCHESTRATE_API_KEY=<key_goes_here> SYSTEM_URI=<usually_http://localhost:1337> node app.js
    
Execute the tests in another bash with the appropriate environment variables.
    
    ` ORCHESTRATE_API_KEY=<key_goes_here> SYSTEM_URI=<usually_http://localhost:1337> mocha tests/*

You're need an Orchestrate API Key in order to run any integration tests. The SYSTEM_URI reflects which system is running
the tests. For the local dev solution that is set to http://localhost:1337, for the Codeship test server it is set to the
AWS Elastic Beanstalk test environment.

[Adron](https://github.com/Adron) || [@Adron](http://twitter.com/adron) || [![Signature Logo](http://photos.adron.me/Software/Misc-Images/Logo/i-5zk96td/0/O/AH---Logo-32x32.png)](http://adron.me)
