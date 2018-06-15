# Getting started

The Conversations API allows users to communicate by sending and receiving messages via Over-The-Top (OTT) messaging services. OTT application is an app or service that provides a product over the Internet and bypasses traditional distribution. Here's an in-depth explanation of what the term means.This feature is disabled by default. To enable it, you don't need to make any changes to your application, just an account configuration change by MessageMedia's support team support@messagemedia.com.For our initial release, we're releasing Facebook Messenger which allows you to send messages as a Facebook page owner and receive messages from other Facebook users.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=MessageMediaConversations-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=MessageMediaConversations-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MessageMediaConversations ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=MessageMediaConversations-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=MessageMediaConversations-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=MessageMediaConversations-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=MessageMediaConversations-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Conversations (Beta)Controller`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Conversations%20%28Beta%29Controller)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AppUsersController](#app_users_controller)
* [ConfigurationController](#configuration_controller)
* [FacebookController](#facebook_controller)

## <a name="app_users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AppUsersController") AppUsersController

### Get singleton instance

The singleton instance of the ``` AppUsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AppUsersController;
```

### <a name="create_send_message"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.createSendMessage") createSendMessage

> Sends a message to the App User with the given ID.
> You can use this endpoint in conjuction with the app users or app user by id endpoint where the response from one of the latter endpoints would display the user id and this can be used with this endpoint to send a message to that user. A successful response from this endpoint will have the following structure:
> ```
> {
>   "channel": "facebook",
>   "text": "Thank you for your query we'll be in touch with an answer shortly."
> }
> ```


```javascript
function createSendMessage(appUserId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var appUserId = 'appUserId';
    var body = new BaseMessageDto({"key":"value"});

    controller.createSendMessage(appUserId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The posted request is invalid or the account is not provisioned. |
| 404 | The app user does not exist. |




### <a name="get_app_user_messages"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUserMessages") getAppUserMessages

> Gets the list of messages sent to and received by the App User with the given ID. A successful response from this endpoint will have the following structure:
> ```
> {
>   "messages": {
>     "data": [
>       {
>         "direction": "RECEIVED",
>         "text": "Hey, I was just wondering how much shipping would be to Australia for one of them awesome t-shirts?",
>         "channel": "FACEBOOK",
>         "timestamp": "2017-12-12T18:18:40.000Z"
>       },
>       {
>         "direction": "SENT",
>         "text": "Thank you for your query we'll be in touch with an answer shortly.",
>         "channel": "FACEBOOK",
>         "timestamp": "2017-12-08T10:12:16.000Z"
>       }
>     ]
>   },
>   "metadata" : {
>     "user_id": "{id}",
>     "account_id": "FunGuys007"
>   }
> }
> ```


```javascript
function getAppUserMessages(appUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |



#### Example Usage

```javascript

    var appUserId = 'appUserId';

    controller.getAppUserMessages(appUserId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | The app user does not exist. |




### <a name="get_app_user_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUserById") getAppUserById

> Gets the App User with the given ID. A successful response from this endpoint will have the following structure:
> ```
> {
>   "id": "3898c5e4-73cc-44f9-812f-3698a4c3bb1d",
>   "surname": "Sims",
>   "given_name": "Ben"
> }
> ```


```javascript
function getAppUserById(appUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |



#### Example Usage

```javascript

    var appUserId = 'appUserId';

    controller.getAppUserById(appUserId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | The app user does not exist. |




### <a name="get_app_users"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUsers") getAppUsers

> Gets a list of App Users that belong to the configured account. A successful response from this endpoint will have the following structure:
> ```
> {
>   "data": [
>     {
>       "id": "3898c5e4-73cc-44f9-812f-3698a4c3bb1d",
>       "surname": "Sims",
>       "given_name": "Ben"
>     },
>     {
>       "id": "331b1da8-10a5-44c7-91df-1dc14cc2f373",
>       "surname": "Hood",
>       "given_name": "Robert"
>     }
>   ]
> }
> ```


```javascript
function getAppUsers(callback)
```

#### Example Usage

```javascript


    controller.getAppUsers(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="configuration_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConfigurationController") ConfigurationController

### Get singleton instance

The singleton instance of the ``` ConfigurationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConfigurationController;
```

### <a name="create_configure_account"></a>![Method: ](https://apidocs.io/img/method.png ".ConfigurationController.createConfigureAccount") createConfigureAccount

> Configures your existing MessageMedia account to use the Conversations API by giving it a human readable name (for reference later on), and also by specifying a callback URL which is where any Inbound Messages and/or Notifications will be pushed to. The request would have the following structure:
> ```
> {
>   "name": "Rainbow Serpent Festival",
>   "callback_url": "http://accounts-domain.com/callback"
> }
> ```
> * `name` is a required property and is a customer friendly name to identify your provisioned account
> * `callback_url` is an optional property is the callback URL to forward inbound messages to.
> *Note: We are currently NOT using our Webhooks functionality for this while it's in beta, when we make this production ready we will look at switching to having these webhooks managed via the Webhooks Management API*


```javascript
function createConfigureAccount(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new ConfigureAccountRequest({    "name": "Rainbow Serpent Festival",    "callback_url": "https://callback.url.com"});

    controller.createConfigureAccount(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Not a valid request body. |
| 409 | The account has already been provisioned. |




[Back to List of Controllers](#list_of_controllers)

## <a name="facebook_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FacebookController") FacebookController

### Get singleton instance

The singleton instance of the ``` FacebookController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FacebookController;
```

### <a name="create_integrate_facebook_page"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.createIntegrateFacebookPage") createIntegrateFacebookPage

> Integrates the Facebook page with the given ID with the configured account.


```javascript
function createIntegrateFacebookPage(facebookPageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| facebookPageId |  ``` Required ```  | facebookPageId |



#### Example Usage

```javascript

    var facebookPageId = 'facebookPageId';

    controller.createIntegrateFacebookPage(facebookPageId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The account is not provisioned or the Facebook user isn't authenticated or the facebookPageId is invalid. |




### <a name="get_facebook_pages"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.getFacebookPages") getFacebookPages

> Gets a list of Facebook pages belonging to the provisioned and Facebook authorised account. A successful response from this endpoint will have the following structure:
> ```
> {
>   "data": [
>     {
>       "id": "1573307926039629",
>       "name": "Rainbow Serpent Festival"
>     },
>     {
>       "id": "373479609790958",
>       "name": "Fans of Doing Live Demos"
>     }
>   ]
> }
> ```


```javascript
function getFacebookPages(callback)
```

#### Example Usage

```javascript


    controller.getFacebookPages(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The account is not provisioned or the Facebook user isn't authenticated. |




### <a name="get_facebook_authorisation_url"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.getFacebookAuthorisationURL") getFacebookAuthorisationURL

> Before you can start integrating Facebook pages on your Facebook account, MessageMedia's messaging platform needs access to that page via what Facebook call a page access token. To get the page access token you first need to provide MessageMedia limited access to your Facebook account.
> Calling this endpoint will get the Facebook authorisation URL which you are required to go through before you can call the integration endpoints. A successful response from this endpoint will have the following structure:
> ```
> {
>   "authorisation_url": "https://www.facebook.com/v2.12/dialog/oauth?client_id={facebookAppId}&amp;redirect_uri={apiUrl}/beta/integration/authenticated&amp;state={provisionedAccountUUID}&amp;response_type=token&amp;scope=email,manage_pages,pages_messaging"
> }
> ```
> *Note: Granting MessageMedia access will only see allow us to see your basic details and the list of pages you have*


```javascript
function getFacebookAuthorisationURL(callback)
```

#### Example Usage

```javascript


    controller.getFacebookAuthorisationURL(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | The account is not provisioned |




[Back to List of Controllers](#list_of_controllers)



