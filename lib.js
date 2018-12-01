/*jshint -W069 */
/**
 * Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
 * @class CloudVisionApi
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var CloudVisionApi = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');

    function CloudVisionApi(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://vision.googleapis.com';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
                this.token = (typeof options === 'object') ? (options.token ? options.token : {}) : {};
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name CloudVisionApi#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    CloudVisionApi.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            req.form = form;
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };

            /**
            * Set Token
            * @method
            * @name CloudVisionApi#setToken
            * @param {string} value - token's value
            * @param {string} headerOrQueryName - the header or query name to send the token at
            * @param {boolean} isQuery - true if send the token as query param, otherwise, send as header param
            */
            CloudVisionApi.prototype.setToken = function (value, headerOrQueryName, isQuery) {
                this.token.value = value;
                this.token.headerOrQueryName = headerOrQueryName;
                this.token.isQuery = isQuery;
            };
        /**
        * Set Auth headers
        * @method
        * @name CloudVisionApi#setAuthHeaders
        * @param {object} headerParams - headers object
        */
        CloudVisionApi.prototype.setAuthHeaders = function (headerParams) {
            var headers = headerParams ? headerParams : {};
            if (!this.token.isQuery) {
                if (this.token.headerOrQueryName) {
                    headers[this.token.headerOrQueryName] = this.token.value;
                } else if (this.token.value) {
                    headers['Authorization'] = 'Bearer ' + this.token.value;
                }
            }
            return headers;
        };

/**
 * Run image detection and annotation for a batch of images.
 * @method
 * @name CloudVisionApi#annotate
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body - Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
     * @param {} parameters.type - Type of Google Cloud Vision API feature to be extracted.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
 CloudVisionApi.prototype.annotate = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/v1/images:annotate';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
        
            path = path.replace('{type}', parameters['type']);
        
        


        if(parameters['type'] === undefined){
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }
 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


        if(parameters['key'] === undefined){
            deferred.reject(new Error('Missing required  parameter: key'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return CloudVisionApi;
})();

exports.CloudVisionApi = CloudVisionApi;
