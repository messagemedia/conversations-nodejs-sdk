const lib = require('../../lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.ProvisioningController;

var request = new lib.ProvisionAccountRequest({
    "name": "Rainbow Serpent Festival",
    "callback_url": "https://callback.url.com"
});

controller.createProvisionAccountUsingPOST(request, function(error, response, context) {
  console.log(error);
});
