/**
 * messagemedia-conversations
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class AppUsersController {
    /**
     * Sends a message to the App User with the given ID.
     * You can use this endpoint in conjuction with the app users or app user by id endpoint
     * where the response from one of the latter endpoints would display the user id and this can
     * be used with this endpoint to send a message to that user. A successful response from this
     * endpoint will have the following structure:
     * ```
     * {
     * "channel": "facebook",
     * "text": "Thank you for your query we'll be in touch with an answer shortly."
     * }
     * ```
     *
     * @param {string} appUserId appUserId
     * @param {BaseMessageDto} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendMessage(appUserId, body, callback) {
        _logger.info('createSendMessage being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createSendMessage');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/beta/conversations/users/{appUserId}/messages'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createSendMessage');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagemedia-conversations-sdk-1.0.0',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createSendMessage  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createSendMessage...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createSendMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for createSendMessage...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for createSendMessage');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'SendMessageResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createSendMessage');
                    const _err = { errorMessage: 'The posted request is invalid or the account is not provisioned.',
                        errorCode: 400,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'createSendMessage');
                    const _err = { errorMessage: 'The app user does not exist.',
                        errorCode: 404,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createSendMessage ');
                    errorResponse = _baseController.validateResponse(_context, 'createSendMessage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets the list of messages sent to and received by the App User with the given ID. A
     * successful response from this endpoint will have the following structure:
     * ```
     * {
     * "messages": {
     * "data": [
     * {
     * "direction": "RECEIVED",
     * "text": "Hey, I was just wondering how much shipping would be to Australia for one
     * of them awesome t-shirts?",
     * "channel": "FACEBOOK",
     * "timestamp": "2017-12-12T18:18:40.000Z"
     * },
     * {
     * "direction": "SENT",
     * "text": "Thank you for your query we'll be in touch with an answer shortly.",
     * "channel": "FACEBOOK",
     * "timestamp": "2017-12-08T10:12:16.000Z"
     * }
     * ]
     * },
     * "metadata" : {
     * "user_id": "{id}",
     * "account_id": "FunGuys007"
     * }
     * }
     * ```
     *
     * @param {string} appUserId appUserId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUserMessages(appUserId, callback) {
        _logger.info('getAppUserMessages being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUserMessages');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/beta/conversations/users/{appUserId}/messages'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUserMessages');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-conversations-sdk-1.0.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUserMessages  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUserMessages...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserMessages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUserMessages...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUserMessages');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetAppUserMessagesResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserMessages');
                    const _err = { errorMessage: 'The app user does not exist.',
                        errorCode: 404,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getAppUserMessages ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserMessages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets the App User with the given ID. A successful response from this endpoint will have
     * the following structure:
     * ```
     * {
     * "id": "3898c5e4-73cc-44f9-812f-3698a4c3bb1d",
     * "surname": "Sims",
     * "given_name": "Ben"
     * }
     * ```
     *
     * @param {string} appUserId appUserId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUserById(appUserId, callback) {
        _logger.info('getAppUserById being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUserById');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/beta/conversations/users/{appUserId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUserById');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-conversations-sdk-1.0.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUserById  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUserById...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserById');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUserById...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUserById');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetAppUserByIdResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserById');
                    const _err = { errorMessage: 'The app user does not exist.',
                        errorCode: 404,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getAppUserById ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserById');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets a list of App Users that belong to the configured account. A successful response from
     * this endpoint will have the following structure:
     * ```
     * {
     * "data": [
     * {
     * "id": "3898c5e4-73cc-44f9-812f-3698a4c3bb1d",
     * "surname": "Sims",
     * "given_name": "Ben"
     * },
     * {
     * "id": "331b1da8-10a5-44c7-91df-1dc14cc2f373",
     * "surname": "Hood",
     * "given_name": "Robert"
     * }
     * ]
     * }
     * ```
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUsers(callback) {
        _logger.info('getAppUsers being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUsers');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/beta/conversations/users'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUsers');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-conversations-sdk-1.0.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUsers  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUsers...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUsers');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUsers...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUsers');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetAppUsersResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getAppUsers ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUsers');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = AppUsersController;
