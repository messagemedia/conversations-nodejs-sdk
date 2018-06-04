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

class FacebookController {
    /**
     * Integrates the Facebook page with the given ID with the provisioned account.
     *
     * @param {string} facebookPageId facebookPageId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIntegrateFacebookPageUsingPOST(facebookPageId, callback) {
        _logger.info('createIntegrateFacebookPageUsingPOST being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createIntegrateFacebookPageUsingPOST');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/conversations/facebook/pages/{facebookPageId}/integrate'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            facebookPageId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createIntegrateFacebookPageUsingPOST');
        const _headers = {
            'user-agent': 'messagesmedia-conversations',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createIntegrateFacebookPageUsingPOST  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createIntegrateFacebookPageUsingPOST...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createIntegrateFacebookPageUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'createIntegrateFacebookPageUsingPOST');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'createIntegrateFacebookPageUsingPOST');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'createIntegrateFacebookPageUsingPOST');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createIntegrateFacebookPageUsingPOST ');
                    errorResponse = _baseController.validateResponse(_context, 'createIntegrateFacebookPageUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets a list of Facebook pages belonging to the provisioned and Facebook authorised account.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getFacebookPagesUsingGET(callback) {
        _logger.info('getFacebookPagesUsingGET being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getFacebookPagesUsingGET');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/conversations/facebook/pages'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getFacebookPagesUsingGET');
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
        _logger.debug(`'Raw request for getFacebookPagesUsingGET  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getFacebookPagesUsingGET...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookPagesUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getFacebookPagesUsingGET...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getFacebookPagesUsingGET');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'FacebookPagesDto');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookPagesUsingGET');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookPagesUsingGET');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookPagesUsingGET');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getFacebookPagesUsingGET ');
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookPagesUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Once an account has been provisioned, endpoint can be called to get the Facebook
     * authorisation URL.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getFacebookAuthorisationUrlUsingGET(callback) {
        _logger.info('getFacebookAuthorisationUrlUsingGET being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getFacebookAuthorisationUrlUsingGET');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/conversations/facebook/authorise'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getFacebookAuthorisationUrlUsingGET');
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
        _logger.debug(`'Raw request for getFacebookAuthorisationUrlUsingGET  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getFacebookAuthorisationUrlUsingGET...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookAuthorisationUrlUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getFacebookAuthorisationUrlUsingGET...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getFacebookAuthorisationUrlUsingGET');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'FacebookAuthorisationResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookAuthorisationUrlUsingGET');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookAuthorisationUrlUsingGET');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookAuthorisationUrlUsingGET');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getFacebookAuthorisationUrlUsingGET ');
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookAuthorisationUrlUsingGET');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = FacebookController;
