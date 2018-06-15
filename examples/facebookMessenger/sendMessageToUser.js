const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.AppUsersController;

var appUserId = 'appUserId';
var message = new BaseMessageDto({"key":"value"});

controller.createSendMessage(appUserId, message, function(error, response, context) {
  console.log(response);
});
