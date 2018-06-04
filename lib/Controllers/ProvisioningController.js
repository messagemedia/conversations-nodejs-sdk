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

class ProvisioningController {
    /**
     * Provisions an account to use the Conversations API.
     *
     * @param {ProvisionAccountRequest} request request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createProvisionAccountUsingPOST(request, callback) {
        _logger.info('createProvisionAccountUsingPOST being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createProvisionAccountUsingPOST');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/conversations/provision'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createProvisionAccountUsingPOST');
        const _headers = {
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagesmedia-conversations',
        };

        // remove null values
        _apiHelper.cleanObject(request);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(request),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createProvisionAccountUsingPOST  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createProvisionAccountUsingPOST...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createProvisionAccountUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else if (_response.statusCode === 401) {
                    _baseController.printErrorLog(_response.statusCode, 'createProvisionAccountUsingPOST');
                    const _err = { errorMessage: 'Unauthorized', errorCode: 401, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 403) {
                    _baseController.printErrorLog(_response.statusCode, 'createProvisionAccountUsingPOST');
                    const _err = { errorMessage: 'Forbidden', errorCode: 403, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'createProvisionAccountUsingPOST');
                    const _err = { errorMessage: 'Not Found', errorCode: 404, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createProvisionAccountUsingPOST ');
                    errorResponse = _baseController.validateResponse(_context, 'createProvisionAccountUsingPOST');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = ProvisioningController;
