/**
 * messagemedia-conversations
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const MessagesDto = require('../lib/Models/MessagesDto');
const AppUsersDto = require('../lib/Models/AppUsersDto');
const FacebookAuthorisationResponse = require('../lib/Models/FacebookAuthorisationResponse');
const BaseMessageDto = require('../lib/Models/BaseMessageDto');
const ProvisionAccountRequest = require('../lib/Models/ProvisionAccountRequest');
const FacebookPagesDto = require('../lib/Models/FacebookPagesDto');
const FacebookPageDto = require('../lib/Models/FacebookPageDto');
const MessageDto = require('../lib/Models/MessageDto');
const AppUserDto = require('../lib/Models/AppUserDto');

const classMap = {
    MessagesDto,
    AppUsersDto,
    FacebookAuthorisationResponse,
    BaseMessageDto,
    ProvisionAccountRequest,
    FacebookPagesDto,
    FacebookPageDto,
    MessageDto,
    AppUserDto,
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
