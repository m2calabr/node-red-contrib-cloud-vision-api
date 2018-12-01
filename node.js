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
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be buffer.', msg);
                    errorFlag = true;
                }

                annotate_nodeParam = node.annotate_type;
                annotate_nodeParamType = node.annotate_typeType;
                if (annotate_nodeParamType === 'str') {
                    annotate_parameters.type = annotate_nodeParam || '';
                } else {
                    annotate_parameters.type = RED.util.getMessageProperty(msg, annotate_nodeParam);
                }

                if (Buffer.isBuffer(annotate_parameters.body)) {
                    annotate_parameters.body = {
                        requests: [{
                            image: {
                                content: annotate_parameters.body.toString('base64')
                            },
                            features: [{
                                type: annotate_parameters.type
                            }]
                        }]
                    };
                }

                annotate_nodeParam = node.credentials.annotate_key;
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
                        msg.payload = null;
                        if (data.body.responses && data.body.responses.length > 0) {
                            msg.details = data.body.responses[0];
                            if (node.annotate_type === 'FACE_DETECTION'
                                    && data.body.responses[0].faceAnnotations
                                    && data.body.responses[0].faceAnnotations.length > 0
                                    && data.body.responses[0].faceAnnotations[0].boundingPoly
                                    && data.body.responses[0].faceAnnotations[0].boundingPoly.vertices) {
                                msg.payload = data.body.responses[0].faceAnnotations[0].boundingPoly.vertices;
                            } else if (node.annotate_type === 'LANDMARK_DETECTION'
                                    && data.body.responses[0].landmarkAnnotations
                                    && data.body.responses[0].landmarkAnnotations.length > 0
                                    && data.body.responses[0].landmarkAnnotations[0].description) {
                                msg.payload = data.body.responses[0].landmarkAnnotations[0].description;
                            } else if (node.annotate_type === 'LOGO_DETECTION'
                                    && data.body.responses[0].logoAnnotations
                                    && data.body.responses[0].logoAnnotations.length > 0
                                    && data.body.responses[0].logoAnnotations[0].description) {
                                msg.payload = data.body.responses[0].logoAnnotations[0].description;
                            } else if (node.annotate_type === 'LABEL_DETECTION'
                                    && data.body.responses[0].labelAnnotations
                                    && data.body.responses[0].labelAnnotations.length > 0
                                    && data.body.responses[0].labelAnnotations[0].description) {
                                msg.payload = data.body.responses[0].labelAnnotations[0].description;
                            } else if (node.annotate_type === 'TEXT_DETECTION'
                                    && data.body.responses[0].fullTextAnnotation
                                    && data.body.responses[0].fullTextAnnotation.text) {
                                msg.payload = data.body.responses[0].fullTextAnnotation.text;
                            } else if (node.annotate_type === 'DOCUMENT_TEXT_DETECTION'
                                    && data.body.responses[0].fullTextAnnotation.text
                                    && data.body.responses[0].fullTextAnnotation) {
                                msg.payload = data.body.responses[0].fullTextAnnotation.text;
                            } else if (node.annotate_type === 'SAFE_SEARCH_DETECTION'
                                    && data.body.responses[0].safeSearchAnnotation) {
                                msg.payload = data.body.responses[0].safeSearchAnnotation;
                            } else if (node.annotate_type === 'IMAGE_PROPERTIES') {
                                msg.payload = data.body.responses[0];
                            } else if (node.annotate_type === 'CROP_HINTS'
                                    && data.body.responses[0].cropHintsAnnotation
                                    && data.body.responses[0].cropHintsAnnotation.cropHints.length > 0
                                    && data.body.responses[0].cropHintsAnnotation.cropHints[0].boundingPoly
                                    && data.body.responses[0].cropHintsAnnotation.cropHints[0].boundingPoly.vertices) {
                                msg.payload = data.body.responses[0].cropHintsAnnotation.cropHints[0].boundingPoly.vertices;
                            } else if (node.annotate_type === 'WEB_DETECTION'
                                    && data.body.responses[0].webDetection) {
                                msg.payload = data.body.responses[0].webDetection;
                            } else if (node.annotate_type === 'OBJECT_LOCALIZATION'
                                    && data.body.responses[0].localizedObjectAnnotations) {
                                msg.payload = data.body.responses[0].localizedObjectAnnotations;
                            }
                        } else {
                            msg.payload = data.body;
                        }
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
                    if (error && error.body && error.body.error && error.body.error.message) {
                        message = error.body.error.message;
                    } else {
                        message = error;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('cloud-vision-api', CloudVisionApiNode,
        {
            credentials: {
                annotate_key: {
                    type: "password"
                }
            }
        });
};
