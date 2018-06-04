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
     *
     * @param {string} appUserId appUserId
     * @param {BaseMessageDto} message message
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendMessageUsingPOST(appUserId, message, callback) {
        _logger.info('createSendMessageUsingPOST being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createSendMessageUsingPOST');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/conversations/users/{appUserId}/messages'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createSendMessageUsingPOST');
        const _headers = {
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagesmedia-conversations',
        };

        // remove null values
        _apiHelper.cleanObject(message);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(message),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createSendMessageUsingPOST  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createSendMessageUsingPOST...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createSendMessageUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'createSendMessageUsingPOST');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'createSendMessageUsingPOST');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'createSendMessageUsingPOST');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createSendMessageUsingPOST ');
                    errorResponse = _baseController.validateResponse(_context, 'createSendMessageUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets the list of messages for the App User with the given ID.
     *
     * @param {string} appUserId appUserId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUserMessagesUsingGET(appUserId, callback) {
        _logger.info('getAppUserMessagesUsingGET being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUserMessagesUsingGET');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/conversations/users/{appUserId}/messages'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUserMessagesUsingGET');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagesmedia-conversations',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUserMessagesUsingGET  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUserMessagesUsingGET...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserMessagesUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUserMessagesUsingGET...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUserMessagesUsingGET');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MessagesDto');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserMessagesUsingGET');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserMessagesUsingGET');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserMessagesUsingGET');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getAppUserMessagesUsingGET ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserMessagesUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets the App User with the given ID.
     *
     * @param {string} appUserId appUserId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUserUsingGET(appUserId, callback) {
        _logger.info('getAppUserUsingGET being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUserUsingGET');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/conversations/users/{appUserId}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            appUserId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUserUsingGET');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagesmedia-conversations',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUserUsingGET  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUserUsingGET...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUserUsingGET...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUserUsingGET');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'AppUserDto');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserUsingGET');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserUsingGET');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUserUsingGET');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getAppUserUsingGET ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUserUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets a list of App Users that belong to the provisioned account.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAppUsersUsingGET(callback) {
        _logger.info('getAppUsersUsingGET being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getAppUsersUsingGET');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/conversations/users'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getAppUsersUsingGET');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagesmedia-conversations',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getAppUsersUsingGET  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getAppUsersUsingGET...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getAppUsersUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getAppUsersUsingGET...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getAppUsersUsingGET');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'AppUsersDto');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUsersUsingGET');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUsersUsingGET');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getAppUsersUsingGET');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getAppUsersUsingGET ');
                    errorResponse = _baseController.validateResponse(_context, 'getAppUsersUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = AppUsersController;
