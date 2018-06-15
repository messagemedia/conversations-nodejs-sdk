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
     * Integrates the Facebook page with the given ID with the configured account.
     *
     * @param {string} facebookPageId facebookPageId
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIntegrateFacebookPage(facebookPageId, callback) {
        _logger.info('createIntegrateFacebookPage being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createIntegrateFacebookPage');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/beta/conversations/facebook/pages/{facebookPageId}/integrate'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            facebookPageId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createIntegrateFacebookPage');
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
        _logger.debug(`'Raw request for createIntegrateFacebookPage  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createIntegrateFacebookPage...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createIntegrateFacebookPage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createIntegrateFacebookPage');
                    const _err = { errorMessage: 'The account is not provisioned or the Facebook user isn\'t authenticated or the facebookPageId is invalid.',
                        errorCode: 400,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createIntegrateFacebookPage ');
                    errorResponse = _baseController.validateResponse(_context, 'createIntegrateFacebookPage');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Gets a list of Facebook pages belonging to the provisioned and Facebook authorised account.
     * A successful response from this endpoint will have the following structure:
     * ```
     * {
     * "data": [
     * {
     * "id": "1573307926039629",
     * "name": "Rainbow Serpent Festival"
     * },
     * {
     * "id": "373479609790958",
     * "name": "Fans of Doing Live Demos"
     * }
     * ]
     * }
     * ```
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getFacebookPages(callback) {
        _logger.info('getFacebookPages being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getFacebookPages');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/beta/conversations/facebook/pages'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getFacebookPages');
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
        _logger.debug(`'Raw request for getFacebookPages  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getFacebookPages...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookPages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getFacebookPages...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getFacebookPages');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetFacebookPagesResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookPages');
                    const _err = { errorMessage: 'The account is not provisioned or the Facebook user isn\'t authenticated.',
                        errorCode: 400,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getFacebookPages ');
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookPages');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Before you can start integrating Facebook pages on your Facebook account, MessageMedia's
     * messaging platform needs access to that page via what Facebook call a page access token.
     * To get the page access token you first need to provide MessageMedia limited access to your
     * Facebook account.
     * Calling this endpoint will get the Facebook authorisation URL which you are required to go
     * through before you can call the integration endpoints. A successful response from this
     * endpoint will have the following structure:
     * ```
     * {
     * "authorisation_url": "https://www.facebook.com/v2.12/dialog/oauth?
     * client_id={facebookAppId}&amp;redirect_uri={apiUrl}/beta/integration/authenticated&amp;
     * state={provisionedAccountUUID}&amp;response_type=token&amp;scope=email,manage_pages,
     * pages_messaging"
     * }
     * ```
     * *Note: Granting MessageMedia access will only see allow us to see your basic details and
     * the list of pages you have*
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getFacebookAuthorisationURL(callback) {
        _logger.info('getFacebookAuthorisationURL being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getFacebookAuthorisationURL');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/beta/conversations/facebook/authorise'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getFacebookAuthorisationURL');
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
        _logger.debug(`'Raw request for getFacebookAuthorisationURL  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getFacebookAuthorisationURL...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookAuthorisationURL');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getFacebookAuthorisationURL...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getFacebookAuthorisationURL');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'GetFacebookAuthorisationURLResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'getFacebookAuthorisationURL');
                    const _err = { errorMessage: 'The account is not provisioned',
                        errorCode: 400,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getFacebookAuthorisationURL ');
                    errorResponse = _baseController.validateResponse(_context, 'getFacebookAuthorisationURL');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = FacebookController;
