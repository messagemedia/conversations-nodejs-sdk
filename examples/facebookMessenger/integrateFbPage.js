const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.FacebookController;

var facebookPageId = 'facebookPageId';

controller.createIntegrateFacebookPage(facebookPageId, function(error, response, context) {
    console.log(response);
});
