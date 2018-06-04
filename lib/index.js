/**
  * @module messagemedia-conversations
  *
  * Conversations Api Documentation
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const ProvisioningController = require('./Controllers/ProvisioningController');
const AppUsersController = require('./Controllers/AppUsersController');
const FacebookController = require('./Controllers/FacebookController');
const MessagesDto = require('./Models/MessagesDto');
const AppUsersDto = require('./Models/AppUsersDto');
const FacebookAuthorisationResponse = require('./Models/FacebookAuthorisationResponse');
const BaseMessageDto = require('./Models/BaseMessageDto');
const ProvisionAccountRequest = require('./Models/ProvisionAccountRequest');
const FacebookPagesDto = require('./Models/FacebookPagesDto');
const FacebookPageDto = require('./Models/FacebookPageDto');
const MessageDto = require('./Models/MessageDto');
const AppUserDto = require('./Models/AppUserDto');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-conversations
    Configuration,
    Logger,
    // controllers of messagemedia-conversations
    ProvisioningController,
    AppUsersController,
    FacebookController,
    // models of messagemedia-conversations
    MessagesDto,
    AppUsersDto,
    FacebookAuthorisationResponse,
    BaseMessageDto,
    ProvisionAccountRequest,
    FacebookPagesDto,
    FacebookPageDto,
    MessageDto,
    AppUserDto,
    // exceptions of messagemedia-conversations
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
