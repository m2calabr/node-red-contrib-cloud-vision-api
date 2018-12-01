'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function CloudVisionApiNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.annotate_body = config.annotate_body;
        this.annotate_bodyType = config.annotate_bodyType || 'str';
        this.annotate_type = config.annotate_type;
        this.annotate_typeType = config.annotate_typeType || 'str';
        this.annotate_key = config.annotate_key;
        this.annotate_keyType = config.annotate_keyType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.CloudVisionApi();
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureTokenValue) {
                if (this.service.secureTokenIsQuery) {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, true);
                } else {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, false);
                }
            }
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'annotate') {
                var annotate_parameters = [];
                var annotate_nodeParam;
                var annotate_nodeParamType;

                if (typeof msg.payload === 'object') {
                    annotate_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                annotate_nodeParam = node.annotate_type;
                annotate_nodeParamType = node.annotate_typeType;
                if (annotate_nodeParamType === 'str') {
                    annotate_parameters.type = annotate_nodeParam || '';
                } else {
                    annotate_parameters.type = RED.util.getMessageProperty(msg, annotate_nodeParam);
                }
                
                annotate_nodeParam = node.annotate_key;
                annotate_nodeParamType = node.annotate_keyType;
                if (annotate_nodeParamType === 'str') {
                    annotate_parameters.key = annotate_nodeParam || '';
                } else {
                    annotate_parameters.key = RED.util.getMessageProperty(msg, annotate_nodeParam);
                }
                                result = client.annotate(annotate_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'CloudVisionApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('cloud-vision-api', CloudVisionApiNode);
};
