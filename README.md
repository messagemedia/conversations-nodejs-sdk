# MessageMedia Conversations NodeJS SDK
[![Travis Build Status](https://api.travis-ci.org/messagemedia/conversations-nodejs-sdk.svg?branch=master)](https://travis-ci.org/messagemedia/conversations-nodejs-sdk)
[![npm version](https://badge.fury.io/js/messagemedia-conversations-sdk.svg)](https://badge.fury.io/js/messagemedia-conversations-sdk)

⚠️ **Please note the API documented is in beta and is subject to breaking changes in the short term.** ⚠️

The MessageMedia Conversations API allows users to communicate by sending and receiving messages via OTT messaging services. This feature is disabled by default. To enable it, you don't need to make any changes to your application, just an account configuration change by MessageMedia's support team (support@messagemedia.com).

## ⭐️ Installing via NPM
Now install messagemedia-messages-sdk via npm by using:
* `npm install messagemedia-conversations-sdk`

Alternatively, add the following to the dependencies section of your package.json:
* `"messagemedia-conversations-sdk": "^1.0.0"`

## 🎬 Get Started
It's easy to get started. Simply enter the API Key and secret you obtained from the [MessageMedia Developers Portal](https://developers.messagemedia.com) into the code snippet below.

### 🚀 Configure an account
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.ConfigurationController;

var request = new lib.ConfigureAccountRequest({
    "name": "Rainbow Serpent Festival",
    "callback_url": "https://callback.url.com"
});

controller.createConfigureAccount(request, function(error, response, context) {
  console.log(error);
});

```

### 🔐 Facebook Authorization
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.FacebookController;

controller.getFacebookAuthorisationURL(function(error, response, context) {
    console.log(response);
});

```

### ⬇️ Get Facebook pages
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.FacebookController;

controller.getFacebookPages(function(error, response, context) {
    console.log(response);
});

```

### ♻️ Integrate Facebook page
You can get the facebookPageId by looking at the response of the Get Facebook pages example.
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.FacebookController;

var facebookPageId = 'facebookPageId';

controller.createIntegrateFacebookPage(facebookPageId, function(error, response, context) {
    console.log(response);
});

```

### 👤 Get users
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.AppUsersController;

controller.getAppUsers(function(error, response, context) {
  console.log(response);
});

```

### 👤 Get user by id
You can get the appUserId from the response of the Get users example.
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.AppUsersController;

var appUserId = 'appUserId';

controller.getAppUserById(appUserId, function(error, response, context) {
    console.log(response);
});

```

### 💬 Get user messages
You can get the appUserId from the response of the Get users example.
```javascript
const lib = require('messagemedia-conversations-sdk');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "API_KEY"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "API_SECRET"; // The password to use with basic authentication

var controller = lib.AppUsersController;

var appUserId = 'appUserId';

controller.getAppUserMessages(appUserId, function(error, response, context) {
  console.log(response);
});

```

### ✉️ Send message to user
You can get the appUserId from the response of the Get users example.
```javascript
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

```

## 📕 Documentation
Check out the [full API documentation](DOCUMENTATION.md) for more detailed information.

## 😕 Need help?
Please contact developer support at developers@messagemedia.com or check out the developer portal at [developers.messagemedia.com](https://developers.messagemedia.com/)

## 📃 License
Apache License. See the [LICENSE](LICENSE) file.
