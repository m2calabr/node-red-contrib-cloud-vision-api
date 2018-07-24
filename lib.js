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
 * Run asynchronous image detection and annotation for a list of generic
files, such as PDF files, which may contain multiple pages and multiple
images per page. Progress and results can be retrieved through the
`google.longrunning.Operations` interface.
`Operation.metadata` contains `OperationMetadata` (metadata).
`Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
 * @method
 * @name CloudVisionApi#visionfilesasyncBatchAnnotate
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body - Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param {string} parameters.accessToken - OAuth access token.
     * @param {string} parameters.uploadProtocol - Upload protocol for media (e.g. "raw", "multipart").
     * @param {string} parameters.quotaUser - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * @param {boolean} parameters.prettyPrint - Returns response with indentations and line breaks.
     * @param {string} parameters.uploadType - Legacy upload protocol for media (e.g. "media", "multipart").
     * @param {string} parameters.fields - Selector specifying which fields to include in a partial response.
     * @param {string} parameters.callback - JSONP
     * @param {string} parameters.oauthToken - OAuth 2.0 token for the current user.
     * @param {string} parameters.xgafv - V1 error format.
     * @param {string} parameters.alt - Data format for response.
 */
 CloudVisionApi.prototype.visionfilesasyncBatchAnnotate = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/v1/files:asyncBatchAnnotate';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


 

                if(parameters['accessToken'] !== undefined){
                    queryParameters['access_token'] = parameters['accessToken'];
                }
        
        
        


 

                if(parameters['uploadProtocol'] !== undefined){
                    queryParameters['upload_protocol'] = parameters['uploadProtocol'];
                }
        
        
        


 

                if(parameters['quotaUser'] !== undefined){
                    queryParameters['quotaUser'] = parameters['quotaUser'];
                }
        
        
        


 

                if(parameters['prettyPrint'] !== undefined){
                    queryParameters['prettyPrint'] = parameters['prettyPrint'];
                }
        
        
        


 

                if(parameters['uploadType'] !== undefined){
                    queryParameters['uploadType'] = parameters['uploadType'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['callback'] !== undefined){
                    queryParameters['callback'] = parameters['callback'];
                }
        
        
        


 

                if(parameters['oauthToken'] !== undefined){
                    queryParameters['oauth_token'] = parameters['oauthToken'];
                }
        
        
        


 

                if(parameters['xgafv'] !== undefined){
                    queryParameters['$.xgafv'] = parameters['xgafv'];
                }
        
        
        


 

                if(parameters['alt'] !== undefined){
                    queryParameters['alt'] = parameters['alt'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Run image detection and annotation for a batch of images.
 * @method
 * @name CloudVisionApi#visionimagesannotate
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body - Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param {string} parameters.accessToken - OAuth access token.
     * @param {string} parameters.uploadProtocol - Upload protocol for media (e.g. "raw", "multipart").
     * @param {string} parameters.quotaUser - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * @param {boolean} parameters.prettyPrint - Returns response with indentations and line breaks.
     * @param {string} parameters.uploadType - Legacy upload protocol for media (e.g. "media", "multipart").
     * @param {string} parameters.fields - Selector specifying which fields to include in a partial response.
     * @param {string} parameters.callback - JSONP
     * @param {string} parameters.oauthToken - OAuth 2.0 token for the current user.
     * @param {string} parameters.xgafv - V1 error format.
     * @param {string} parameters.alt - Data format for response.
 */
 CloudVisionApi.prototype.visionimagesannotate = function(parameters){
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


 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


 

                if(parameters['accessToken'] !== undefined){
                    queryParameters['access_token'] = parameters['accessToken'];
                }
        
        
        


 

                if(parameters['uploadProtocol'] !== undefined){
                    queryParameters['upload_protocol'] = parameters['uploadProtocol'];
                }
        
        
        


 

                if(parameters['quotaUser'] !== undefined){
                    queryParameters['quotaUser'] = parameters['quotaUser'];
                }
        
        
        


 

                if(parameters['prettyPrint'] !== undefined){
                    queryParameters['prettyPrint'] = parameters['prettyPrint'];
                }
        
        
        


 

                if(parameters['uploadType'] !== undefined){
                    queryParameters['uploadType'] = parameters['uploadType'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['callback'] !== undefined){
                    queryParameters['callback'] = parameters['callback'];
                }
        
        
        


 

                if(parameters['oauthToken'] !== undefined){
                    queryParameters['oauth_token'] = parameters['oauthToken'];
                }
        
        
        


 

                if(parameters['xgafv'] !== undefined){
                    queryParameters['$.xgafv'] = parameters['xgafv'];
                }
        
        
        


 

                if(parameters['alt'] !== undefined){
                    queryParameters['alt'] = parameters['alt'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.
 * @method
 * @name CloudVisionApi#visionoperationsdelete
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.name - The name of the operation resource to be deleted.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param {string} parameters.accessToken - OAuth access token.
     * @param {string} parameters.uploadProtocol - Upload protocol for media (e.g. "raw", "multipart").
     * @param {string} parameters.quotaUser - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * @param {boolean} parameters.prettyPrint - Returns response with indentations and line breaks.
     * @param {string} parameters.uploadType - Legacy upload protocol for media (e.g. "media", "multipart").
     * @param {string} parameters.fields - Selector specifying which fields to include in a partial response.
     * @param {string} parameters.callback - JSONP
     * @param {string} parameters.oauthToken - OAuth 2.0 token for the current user.
     * @param {string} parameters.xgafv - V1 error format.
     * @param {string} parameters.alt - Data format for response.
 */
 CloudVisionApi.prototype.visionoperationsdelete = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/v1/{+name}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);

        
            path = path.replace('{name}', parameters['name']);
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


 

                if(parameters['accessToken'] !== undefined){
                    queryParameters['access_token'] = parameters['accessToken'];
                }
        
        
        


 

                if(parameters['uploadProtocol'] !== undefined){
                    queryParameters['upload_protocol'] = parameters['uploadProtocol'];
                }
        
        
        


 

                if(parameters['quotaUser'] !== undefined){
                    queryParameters['quotaUser'] = parameters['quotaUser'];
                }
        
        
        


 

                if(parameters['prettyPrint'] !== undefined){
                    queryParameters['prettyPrint'] = parameters['prettyPrint'];
                }
        
        
        


 

                if(parameters['uploadType'] !== undefined){
                    queryParameters['uploadType'] = parameters['uploadType'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['callback'] !== undefined){
                    queryParameters['callback'] = parameters['callback'];
                }
        
        
        


 

                if(parameters['oauthToken'] !== undefined){
                    queryParameters['oauth_token'] = parameters['oauthToken'];
                }
        
        
        


 

                if(parameters['xgafv'] !== undefined){
                    queryParameters['$.xgafv'] = parameters['xgafv'];
                }
        
        
        


 

                if(parameters['alt'] !== undefined){
                    queryParameters['alt'] = parameters['alt'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.
 * @method
 * @name CloudVisionApi#visionlocationsoperationsget
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.name - The name of the operation resource.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param {string} parameters.accessToken - OAuth access token.
     * @param {string} parameters.uploadProtocol - Upload protocol for media (e.g. "raw", "multipart").
     * @param {string} parameters.quotaUser - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * @param {boolean} parameters.prettyPrint - Returns response with indentations and line breaks.
     * @param {string} parameters.uploadType - Legacy upload protocol for media (e.g. "media", "multipart").
     * @param {string} parameters.fields - Selector specifying which fields to include in a partial response.
     * @param {string} parameters.callback - JSONP
     * @param {string} parameters.oauthToken - OAuth 2.0 token for the current user.
     * @param {string} parameters.xgafv - V1 error format.
     * @param {string} parameters.alt - Data format for response.
 */
 CloudVisionApi.prototype.visionlocationsoperationsget = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/v1/{+name}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);

        
            path = path.replace('{name}', parameters['name']);
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


 

                if(parameters['accessToken'] !== undefined){
                    queryParameters['access_token'] = parameters['accessToken'];
                }
        
        
        


 

                if(parameters['uploadProtocol'] !== undefined){
                    queryParameters['upload_protocol'] = parameters['uploadProtocol'];
                }
        
        
        


 

                if(parameters['quotaUser'] !== undefined){
                    queryParameters['quotaUser'] = parameters['quotaUser'];
                }
        
        
        


 

                if(parameters['prettyPrint'] !== undefined){
                    queryParameters['prettyPrint'] = parameters['prettyPrint'];
                }
        
        
        


 

                if(parameters['uploadType'] !== undefined){
                    queryParameters['uploadType'] = parameters['uploadType'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['callback'] !== undefined){
                    queryParameters['callback'] = parameters['callback'];
                }
        
        
        


 

                if(parameters['oauthToken'] !== undefined){
                    queryParameters['oauth_token'] = parameters['oauthToken'];
                }
        
        
        


 

                if(parameters['xgafv'] !== undefined){
                    queryParameters['$.xgafv'] = parameters['xgafv'];
                }
        
        
        


 

                if(parameters['alt'] !== undefined){
                    queryParameters['alt'] = parameters['alt'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
 * @method
 * @name CloudVisionApi#visionoperationscancel
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.name - The name of the operation resource to be cancelled.
     * @param {} parameters.body - Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
     * @param {string} parameters.key - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * @param {string} parameters.accessToken - OAuth access token.
     * @param {string} parameters.uploadProtocol - Upload protocol for media (e.g. "raw", "multipart").
     * @param {string} parameters.quotaUser - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * @param {boolean} parameters.prettyPrint - Returns response with indentations and line breaks.
     * @param {string} parameters.uploadType - Legacy upload protocol for media (e.g. "media", "multipart").
     * @param {string} parameters.fields - Selector specifying which fields to include in a partial response.
     * @param {string} parameters.callback - JSONP
     * @param {string} parameters.oauthToken - OAuth 2.0 token for the current user.
     * @param {string} parameters.xgafv - V1 error format.
     * @param {string} parameters.alt - Data format for response.
 */
 CloudVisionApi.prototype.visionoperationscancel = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/v1/{+name}:cancel';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);

        
            path = path.replace('{name}', parameters['name']);
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 

                if(parameters['key'] !== undefined){
                    queryParameters['key'] = parameters['key'];
                }
        
        
        


 

                if(parameters['accessToken'] !== undefined){
                    queryParameters['access_token'] = parameters['accessToken'];
                }
        
        
        


 

                if(parameters['uploadProtocol'] !== undefined){
                    queryParameters['upload_protocol'] = parameters['uploadProtocol'];
                }
        
        
        


 

                if(parameters['quotaUser'] !== undefined){
                    queryParameters['quotaUser'] = parameters['quotaUser'];
                }
        
        
        


 

                if(parameters['prettyPrint'] !== undefined){
                    queryParameters['prettyPrint'] = parameters['prettyPrint'];
                }
        
        
        


 

                if(parameters['uploadType'] !== undefined){
                    queryParameters['uploadType'] = parameters['uploadType'];
                }
        
        
        


 

                if(parameters['fields'] !== undefined){
                    queryParameters['fields'] = parameters['fields'];
                }
        
        
        


 

                if(parameters['callback'] !== undefined){
                    queryParameters['callback'] = parameters['callback'];
                }
        
        
        


 

                if(parameters['oauthToken'] !== undefined){
                    queryParameters['oauth_token'] = parameters['oauthToken'];
                }
        
        
        


 

                if(parameters['xgafv'] !== undefined){
                    queryParameters['$.xgafv'] = parameters['xgafv'];
                }
        
        
        


 

                if(parameters['alt'] !== undefined){
                    queryParameters['alt'] = parameters['alt'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return CloudVisionApi;
})();

exports.CloudVisionApi = CloudVisionApi;
