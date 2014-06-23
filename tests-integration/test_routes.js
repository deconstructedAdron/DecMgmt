/**
 * Created by adronhall on 6/23/14.
 * Description: Testing for calls to routes.
 * Notes: This file assumes that the application is running locally at localhost:1337 and calls are
 *   made against the actual API.
 * Status codes:

 The values of the numeric status code to HTTP requests are as follows. The data sections of messages Error, Forward and redirection responses may be used to contain human-readable diagnostic information.

 Success 2xx

 These codes indicate success. The body section if present is the object returned by the request. It is a MIME format object. It is in MIME format, and may only be in text/plain, text/html or one fo the formats specified as acceptable in the request.

 OK 200

 The request was fulfilled.

 CREATED 201

 Following a POST command, this indicates success, but the textual part of the response line indicates the URI by which the newly created document should be known.

 Accepted 202

 The request has been accepted for processing, but the processing has not been completed. The request may or may not eventually be acted upon, as it may be disallowed when processing actually takes place. there is no facility for status returns from asynchronous operations such as this.

 Partial Information 203

 When received in the response to a GET command, this indicates that the returned metainformation is not a definitive set of the object from a server with a copy of the object, but is from a private overlaid web. This may include annotation information about the object, for example.

 No Response 204

 Server has received the request but there is no information to send back, and the client should stay in the same document view. This is mainly to allow input for scripts without changing the document at the same time.

 Error 4xx, 5xx

 The 4xx codes are intended for cases in which the client seems to have erred, and the 5xx codes for the cases in which the server is aware that the server has erred. It is impossible to distinguish these cases in general, so the difference is only informational.

 The body section may contain a document describing the error in human readable form. The document is in MIME format, and may only be in text/plain, text/html or one for the formats specified as acceptable in the request.

 Bad request 400

 The request had bad syntax or was inherently impossible to be satisfied.

 Unauthorized 401

 The parameter to this message gives a specification of authorization schemes which are acceptable. The client should retry the request with a suitable Authorization header.

 PaymentRequired 402

 The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header.

 Forbidden 403

 The request is for something forbidden. Authorization will not help.

 Not found 404

 The server has not found anything matching the URI given

 Internal Error 500

 The server encountered an unexpected condition which prevented it from fulfilling the request.

 Not implemented 501

 The server does not support the facility required.

 */



var should = require ('chai').should ();
var supertest = require ('supertest');
var routes = supertest ('http://localhost:1337');

var testuser = {username: 'public', password: 'blagh'};

describe ('API Calls', function () {

    describe ('to Blitz.io URI', function () {
        it ('should return a 200 success.', function (done) {
            routes.get ('/mu-41acf44f-894ab026-ac5e0f6d-75c032d0')
                .expect (200, done)
        });

    })

    describe ('to stat URI', function () {
        it ('should return 401 unauthorized.', function (done) {
            routes.get ('/stat')
                .expect (401, done)
        })

        // Need to figure this out.
        //        it('should return 200 authorized & successful.', function(done){
        //            routes.get('/stat')
        //                .send(testuser)
        //                .expect(200, done)
        //                .end(function(err, res){
        //                    if (err) return done (err);
        //                    done();
        //                })
        //        })
    })

});
