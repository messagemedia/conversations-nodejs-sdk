/**
  * @module messagemedia-conversations
  *
  * The Conversations API allows users to communicate by sending and receiving messages via Over-
  * The-Top (OTT) messaging services. OTT application is an app or service that provides a product
  * over the Internet and bypasses traditional distribution. Here's an in-depth explanation of what
  * the term means.This feature is disabled by default. To enable it, you don't need to make any
  * changes to your application, just an account configuration change by MessageMedia's support
  * team support@messagemedia.com.For our initial release, we're releasing Facebook Messenger which
  * allows you to send messages as a Facebook page owner and receive messages from other Facebook
  * users.
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const AppUsersController = require('./Controllers/AppUsersController');
const ConfigurationController = require('./Controllers/ConfigurationController');
const FacebookController = require('./Controllers/FacebookController');
const SendMessageResponse = require('./Models/SendMessageResponse');
const GetAppUsersResponse = require('./Models/GetAppUsersResponse');
const GetFacebookPagesResponse = require('./Models/GetFacebookPagesResponse');
const GetFacebookAuthorisationURLResponse = require('./Models/GetFacebookAuthorisationURLResponse');
const ConfigureAccountResponse = require('./Models/ConfigureAccountResponse');
const ConfigureAccountRequest = require('./Models/ConfigureAccountRequest');
const ProvisionAccountRequest = require('./Models/ProvisionAccountRequest');
const MessagesDto = require('./Models/MessagesDto');
const FacebookPagesDto = require('./Models/FacebookPagesDto');
const FacebookPageDto = require('./Models/FacebookPageDto');
const FacebookAuthorisationResponse = require('./Models/FacebookAuthorisationResponse');
const GetAppUserMessagesResponse = require('./Models/GetAppUserMessagesResponse');
const BaseMessageDto = require('./Models/BaseMessageDto');
const MessageDto = require('./Models/MessageDto');
const AppUserDto = require('./Models/AppUserDto');
const GetAppUserByIdResponse = require('./Models/GetAppUserByIdResponse');
const AppUsersDto = require('./Models/AppUsersDto');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-conversations
    Configuration,
    Logger,
    // controllers of messagemedia-conversations
    AppUsersController,
    ConfigurationController,
    FacebookController,
    // models of messagemedia-conversations
    SendMessageResponse,
    GetAppUsersResponse,
    GetFacebookPagesResponse,
    GetFacebookAuthorisationURLResponse,
    ConfigureAccountResponse,
    ConfigureAccountRequest,
    ProvisionAccountRequest,
    MessagesDto,
    FacebookPagesDto,
    FacebookPageDto,
    FacebookAuthorisationResponse,
    GetAppUserMessagesResponse,
    BaseMessageDto,
    MessageDto,
    AppUserDto,
    GetAppUserByIdResponse,
    AppUsersDto,
    // exceptions of messagemedia-conversations
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
