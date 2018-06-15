/**
 * messagemedia-conversations
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const SendMessageResponse = require('../lib/Models/SendMessageResponse');
const GetAppUsersResponse = require('../lib/Models/GetAppUsersResponse');
const GetFacebookPagesResponse = require('../lib/Models/GetFacebookPagesResponse');
const GetFacebookAuthorisationURLResponse =
  require('../lib/Models/GetFacebookAuthorisationURLResponse');
const ConfigureAccountResponse = require('../lib/Models/ConfigureAccountResponse');
const ConfigureAccountRequest = require('../lib/Models/ConfigureAccountRequest');
const ProvisionAccountRequest = require('../lib/Models/ProvisionAccountRequest');
const MessagesDto = require('../lib/Models/MessagesDto');
const FacebookPagesDto = require('../lib/Models/FacebookPagesDto');
const FacebookPageDto = require('../lib/Models/FacebookPageDto');
const FacebookAuthorisationResponse = require('../lib/Models/FacebookAuthorisationResponse');
const GetAppUserMessagesResponse = require('../lib/Models/GetAppUserMessagesResponse');
const BaseMessageDto = require('../lib/Models/BaseMessageDto');
const MessageDto = require('../lib/Models/MessageDto');
const AppUserDto = require('../lib/Models/AppUserDto');
const GetAppUserByIdResponse = require('../lib/Models/GetAppUserByIdResponse');
const AppUsersDto = require('../lib/Models/AppUsersDto');

const classMap = {
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
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
