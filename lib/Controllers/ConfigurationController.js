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

class ConfigurationController {
    /**
     * Configures your existing MessageMedia account to use the Conversations API by giving it a
     * human readable name (for reference later on), and also by specifying a callback URL which
     * is where any Inbound Messages and/or Notifications will be pushed to. The request would
     * have the following structure:
     * ```
     * {
     * "name": "Rainbow Serpent Festival",
     * "callback_url": "http://accounts-domain.com/callback"
     * }
     * ```
     * * `name` is a required property and is a customer friendly name to identify your
     * provisioned account
     * * `callback_url` is an optional property is the callback URL to forward inbound messages
     * to.
     * *Note: We are currently NOT using our Webhooks functionality for this while it's in beta,
     * when we make this production ready we will look at switching to having these webhooks
     * managed via the Webhooks Management API*
     *
     * @param {ConfigureAccountRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createConfigureAccount(body, callback) {
        _logger.info('createConfigureAccount being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createConfigureAccount');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/beta/conversations/provision'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createConfigureAccount');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagesmedia-conversations',
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
        _logger.debug(`'Raw request for createConfigureAccount  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createConfigureAccount...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createConfigureAccount');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for createConfigureAccount...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for createConfigureAccount');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'ConfigureAccountResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createConfigureAccount');
                    const _err = { errorMessage: 'Not a valid request body.',
                        errorCode: 400,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 409) {
                    _baseController.printErrorLog(_response.statusCode, 'createConfigureAccount');
                    const _err = { errorMessage: 'The account has already been provisioned.',
                        errorCode: 409,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createConfigureAccount ');
                    errorResponse = _baseController.validateResponse(_context, 'createConfigureAccount');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = ConfigurationController;
