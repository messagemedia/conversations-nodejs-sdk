# Getting started

Conversations Api Documentation

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
2. Type `mocha  ConversationsController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=ConversationsController)

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

* [ProvisioningController](#provisioning_controller)
* [AppUsersController](#app_users_controller)
* [FacebookController](#facebook_controller)

## <a name="provisioning_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ProvisioningController") ProvisioningController

### Get singleton instance

The singleton instance of the ``` ProvisioningController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ProvisioningController;
```

### <a name="create_provision_account_using_post"></a>![Method: ](https://apidocs.io/img/method.png ".ProvisioningController.createProvisionAccountUsingPOST") createProvisionAccountUsingPOST

> Provisions an account to use the Conversations API.


```javascript
function createProvisionAccountUsingPOST(request, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| request |  ``` Required ```  | request |



#### Example Usage

```javascript

    var request = new ProvisionAccountRequest({"key":"value"});

    controller.createProvisionAccountUsingPOST(request, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




[Back to List of Controllers](#list_of_controllers)

## <a name="app_users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AppUsersController") AppUsersController

### Get singleton instance

The singleton instance of the ``` AppUsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AppUsersController;
```

### <a name="create_send_message_using_post"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.createSendMessageUsingPOST") createSendMessageUsingPOST

> Sends a message to the App User with the given ID.


```javascript
function createSendMessageUsingPOST(appUserId, message, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |
| message |  ``` Required ```  | message |



#### Example Usage

```javascript

    var appUserId = 'appUserId';
    var message = new BaseMessageDto({"key":"value"});

    controller.createSendMessageUsingPOST(appUserId, message, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




### <a name="get_app_user_messages_using_get"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUserMessagesUsingGET") getAppUserMessagesUsingGET

> Gets the list of messages for the App User with the given ID.


```javascript
function getAppUserMessagesUsingGET(appUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |



#### Example Usage

```javascript

    var appUserId = 'appUserId';

    controller.getAppUserMessagesUsingGET(appUserId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




### <a name="get_app_user_using_get"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUserUsingGET") getAppUserUsingGET

> Gets the App User with the given ID.


```javascript
function getAppUserUsingGET(appUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appUserId |  ``` Required ```  | appUserId |



#### Example Usage

```javascript

    var appUserId = 'appUserId';

    controller.getAppUserUsingGET(appUserId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




### <a name="get_app_users_using_get"></a>![Method: ](https://apidocs.io/img/method.png ".AppUsersController.getAppUsersUsingGET") getAppUsersUsingGET

> Gets a list of App Users that belong to the provisioned account.


```javascript
function getAppUsersUsingGET(callback)
```

#### Example Usage

```javascript


    controller.getAppUsersUsingGET(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




[Back to List of Controllers](#list_of_controllers)

## <a name="facebook_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FacebookController") FacebookController

### Get singleton instance

The singleton instance of the ``` FacebookController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FacebookController;
```

### <a name="create_integrate_facebook_page_using_post"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.createIntegrateFacebookPageUsingPOST") createIntegrateFacebookPageUsingPOST

> Integrates the Facebook page with the given ID with the provisioned account.


```javascript
function createIntegrateFacebookPageUsingPOST(facebookPageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| facebookPageId |  ``` Required ```  | facebookPageId |



#### Example Usage

```javascript

    var facebookPageId = 'facebookPageId';

    controller.createIntegrateFacebookPageUsingPOST(facebookPageId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




### <a name="get_facebook_pages_using_get"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.getFacebookPagesUsingGET") getFacebookPagesUsingGET

> Gets a list of Facebook pages belonging to the provisioned and Facebook authorised account.


```javascript
function getFacebookPagesUsingGET(callback)
```

#### Example Usage

```javascript


    controller.getFacebookPagesUsingGET(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




### <a name="get_facebook_authorisation_url_using_get"></a>![Method: ](https://apidocs.io/img/method.png ".FacebookController.getFacebookAuthorisationUrlUsingGET") getFacebookAuthorisationUrlUsingGET

> Once an account has been provisioned, endpoint can be called to get the Facebook authorisation URL.


```javascript
function getFacebookAuthorisationUrlUsingGET(callback)
```

#### Example Usage

```javascript


    controller.getFacebookAuthorisationUrlUsingGET(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |




[Back to List of Controllers](#list_of_controllers)



