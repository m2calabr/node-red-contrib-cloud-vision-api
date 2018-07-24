"use strict";
var lib = require('./lib.js');

module.exports = function (RED) {
    function CloudVisionApiNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;

        this.visionfilesasyncBatchAnnotate_body = config.visionfilesasyncBatchAnnotate_body;
        this.visionfilesasyncBatchAnnotate_bodyType = config.visionfilesasyncBatchAnnotate_bodyType || 'str';
        this.visionfilesasyncBatchAnnotate_key = config.visionfilesasyncBatchAnnotate_key;
        this.visionfilesasyncBatchAnnotate_keyType = config.visionfilesasyncBatchAnnotate_keyType || 'str';
        this.visionfilesasyncBatchAnnotate_accessToken = config.visionfilesasyncBatchAnnotate_accessToken;
        this.visionfilesasyncBatchAnnotate_accessTokenType = config.visionfilesasyncBatchAnnotate_accessTokenType || 'str';
        this.visionfilesasyncBatchAnnotate_uploadProtocol = config.visionfilesasyncBatchAnnotate_uploadProtocol;
        this.visionfilesasyncBatchAnnotate_uploadProtocolType = config.visionfilesasyncBatchAnnotate_uploadProtocolType || 'str';
        this.visionfilesasyncBatchAnnotate_quotaUser = config.visionfilesasyncBatchAnnotate_quotaUser;
        this.visionfilesasyncBatchAnnotate_quotaUserType = config.visionfilesasyncBatchAnnotate_quotaUserType || 'str';
        this.visionfilesasyncBatchAnnotate_prettyPrint = config.visionfilesasyncBatchAnnotate_prettyPrint;
        this.visionfilesasyncBatchAnnotate_prettyPrintType = config.visionfilesasyncBatchAnnotate_prettyPrintType || 'str';
        this.visionfilesasyncBatchAnnotate_uploadType = config.visionfilesasyncBatchAnnotate_uploadType;
        this.visionfilesasyncBatchAnnotate_uploadTypeType = config.visionfilesasyncBatchAnnotate_uploadTypeType || 'str';
        this.visionfilesasyncBatchAnnotate_fields = config.visionfilesasyncBatchAnnotate_fields;
        this.visionfilesasyncBatchAnnotate_fieldsType = config.visionfilesasyncBatchAnnotate_fieldsType || 'str';
        this.visionfilesasyncBatchAnnotate_callback = config.visionfilesasyncBatchAnnotate_callback;
        this.visionfilesasyncBatchAnnotate_callbackType = config.visionfilesasyncBatchAnnotate_callbackType || 'str';
        this.visionfilesasyncBatchAnnotate_oauthToken = config.visionfilesasyncBatchAnnotate_oauthToken;
        this.visionfilesasyncBatchAnnotate_oauthTokenType = config.visionfilesasyncBatchAnnotate_oauthTokenType || 'str';
        this.visionfilesasyncBatchAnnotate_xgafv = config.visionfilesasyncBatchAnnotate_xgafv;
        this.visionfilesasyncBatchAnnotate_xgafvType = config.visionfilesasyncBatchAnnotate_xgafvType || 'str';
        this.visionfilesasyncBatchAnnotate_alt = config.visionfilesasyncBatchAnnotate_alt;
        this.visionfilesasyncBatchAnnotate_altType = config.visionfilesasyncBatchAnnotate_altType || 'str';
        this.visionimagesannotate_body = config.visionimagesannotate_body;
        this.visionimagesannotate_bodyType = config.visionimagesannotate_bodyType || 'str';
        this.visionimagesannotate_key = config.visionimagesannotate_key;
        this.visionimagesannotate_keyType = config.visionimagesannotate_keyType || 'str';
        this.visionimagesannotate_accessToken = config.visionimagesannotate_accessToken;
        this.visionimagesannotate_accessTokenType = config.visionimagesannotate_accessTokenType || 'str';
        this.visionimagesannotate_uploadProtocol = config.visionimagesannotate_uploadProtocol;
        this.visionimagesannotate_uploadProtocolType = config.visionimagesannotate_uploadProtocolType || 'str';
        this.visionimagesannotate_quotaUser = config.visionimagesannotate_quotaUser;
        this.visionimagesannotate_quotaUserType = config.visionimagesannotate_quotaUserType || 'str';
        this.visionimagesannotate_prettyPrint = config.visionimagesannotate_prettyPrint;
        this.visionimagesannotate_prettyPrintType = config.visionimagesannotate_prettyPrintType || 'str';
        this.visionimagesannotate_uploadType = config.visionimagesannotate_uploadType;
        this.visionimagesannotate_uploadTypeType = config.visionimagesannotate_uploadTypeType || 'str';
        this.visionimagesannotate_fields = config.visionimagesannotate_fields;
        this.visionimagesannotate_fieldsType = config.visionimagesannotate_fieldsType || 'str';
        this.visionimagesannotate_callback = config.visionimagesannotate_callback;
        this.visionimagesannotate_callbackType = config.visionimagesannotate_callbackType || 'str';
        this.visionimagesannotate_oauthToken = config.visionimagesannotate_oauthToken;
        this.visionimagesannotate_oauthTokenType = config.visionimagesannotate_oauthTokenType || 'str';
        this.visionimagesannotate_xgafv = config.visionimagesannotate_xgafv;
        this.visionimagesannotate_xgafvType = config.visionimagesannotate_xgafvType || 'str';
        this.visionimagesannotate_alt = config.visionimagesannotate_alt;
        this.visionimagesannotate_altType = config.visionimagesannotate_altType || 'str';
        this.visionoperationsdelete_name = config.visionoperationsdelete_name;
        this.visionoperationsdelete_nameType = config.visionoperationsdelete_nameType || 'str';
        this.visionoperationsdelete_key = config.visionoperationsdelete_key;
        this.visionoperationsdelete_keyType = config.visionoperationsdelete_keyType || 'str';
        this.visionoperationsdelete_accessToken = config.visionoperationsdelete_accessToken;
        this.visionoperationsdelete_accessTokenType = config.visionoperationsdelete_accessTokenType || 'str';
        this.visionoperationsdelete_uploadProtocol = config.visionoperationsdelete_uploadProtocol;
        this.visionoperationsdelete_uploadProtocolType = config.visionoperationsdelete_uploadProtocolType || 'str';
        this.visionoperationsdelete_quotaUser = config.visionoperationsdelete_quotaUser;
        this.visionoperationsdelete_quotaUserType = config.visionoperationsdelete_quotaUserType || 'str';
        this.visionoperationsdelete_prettyPrint = config.visionoperationsdelete_prettyPrint;
        this.visionoperationsdelete_prettyPrintType = config.visionoperationsdelete_prettyPrintType || 'str';
        this.visionoperationsdelete_uploadType = config.visionoperationsdelete_uploadType;
        this.visionoperationsdelete_uploadTypeType = config.visionoperationsdelete_uploadTypeType || 'str';
        this.visionoperationsdelete_fields = config.visionoperationsdelete_fields;
        this.visionoperationsdelete_fieldsType = config.visionoperationsdelete_fieldsType || 'str';
        this.visionoperationsdelete_callback = config.visionoperationsdelete_callback;
        this.visionoperationsdelete_callbackType = config.visionoperationsdelete_callbackType || 'str';
        this.visionoperationsdelete_oauthToken = config.visionoperationsdelete_oauthToken;
        this.visionoperationsdelete_oauthTokenType = config.visionoperationsdelete_oauthTokenType || 'str';
        this.visionoperationsdelete_xgafv = config.visionoperationsdelete_xgafv;
        this.visionoperationsdelete_xgafvType = config.visionoperationsdelete_xgafvType || 'str';
        this.visionoperationsdelete_alt = config.visionoperationsdelete_alt;
        this.visionoperationsdelete_altType = config.visionoperationsdelete_altType || 'str';
        this.visionlocationsoperationsget_name = config.visionlocationsoperationsget_name;
        this.visionlocationsoperationsget_nameType = config.visionlocationsoperationsget_nameType || 'str';
        this.visionlocationsoperationsget_key = config.visionlocationsoperationsget_key;
        this.visionlocationsoperationsget_keyType = config.visionlocationsoperationsget_keyType || 'str';
        this.visionlocationsoperationsget_accessToken = config.visionlocationsoperationsget_accessToken;
        this.visionlocationsoperationsget_accessTokenType = config.visionlocationsoperationsget_accessTokenType || 'str';
        this.visionlocationsoperationsget_uploadProtocol = config.visionlocationsoperationsget_uploadProtocol;
        this.visionlocationsoperationsget_uploadProtocolType = config.visionlocationsoperationsget_uploadProtocolType || 'str';
        this.visionlocationsoperationsget_quotaUser = config.visionlocationsoperationsget_quotaUser;
        this.visionlocationsoperationsget_quotaUserType = config.visionlocationsoperationsget_quotaUserType || 'str';
        this.visionlocationsoperationsget_prettyPrint = config.visionlocationsoperationsget_prettyPrint;
        this.visionlocationsoperationsget_prettyPrintType = config.visionlocationsoperationsget_prettyPrintType || 'str';
        this.visionlocationsoperationsget_uploadType = config.visionlocationsoperationsget_uploadType;
        this.visionlocationsoperationsget_uploadTypeType = config.visionlocationsoperationsget_uploadTypeType || 'str';
        this.visionlocationsoperationsget_fields = config.visionlocationsoperationsget_fields;
        this.visionlocationsoperationsget_fieldsType = config.visionlocationsoperationsget_fieldsType || 'str';
        this.visionlocationsoperationsget_callback = config.visionlocationsoperationsget_callback;
        this.visionlocationsoperationsget_callbackType = config.visionlocationsoperationsget_callbackType || 'str';
        this.visionlocationsoperationsget_oauthToken = config.visionlocationsoperationsget_oauthToken;
        this.visionlocationsoperationsget_oauthTokenType = config.visionlocationsoperationsget_oauthTokenType || 'str';
        this.visionlocationsoperationsget_xgafv = config.visionlocationsoperationsget_xgafv;
        this.visionlocationsoperationsget_xgafvType = config.visionlocationsoperationsget_xgafvType || 'str';
        this.visionlocationsoperationsget_alt = config.visionlocationsoperationsget_alt;
        this.visionlocationsoperationsget_altType = config.visionlocationsoperationsget_altType || 'str';
        this.visionoperationscancel_name = config.visionoperationscancel_name;
        this.visionoperationscancel_nameType = config.visionoperationscancel_nameType || 'str';
        this.visionoperationscancel_body = config.visionoperationscancel_body;
        this.visionoperationscancel_bodyType = config.visionoperationscancel_bodyType || 'str';
        this.visionoperationscancel_key = config.visionoperationscancel_key;
        this.visionoperationscancel_keyType = config.visionoperationscancel_keyType || 'str';
        this.visionoperationscancel_accessToken = config.visionoperationscancel_accessToken;
        this.visionoperationscancel_accessTokenType = config.visionoperationscancel_accessTokenType || 'str';
        this.visionoperationscancel_uploadProtocol = config.visionoperationscancel_uploadProtocol;
        this.visionoperationscancel_uploadProtocolType = config.visionoperationscancel_uploadProtocolType || 'str';
        this.visionoperationscancel_quotaUser = config.visionoperationscancel_quotaUser;
        this.visionoperationscancel_quotaUserType = config.visionoperationscancel_quotaUserType || 'str';
        this.visionoperationscancel_prettyPrint = config.visionoperationscancel_prettyPrint;
        this.visionoperationscancel_prettyPrintType = config.visionoperationscancel_prettyPrintType || 'str';
        this.visionoperationscancel_uploadType = config.visionoperationscancel_uploadType;
        this.visionoperationscancel_uploadTypeType = config.visionoperationscancel_uploadTypeType || 'str';
        this.visionoperationscancel_fields = config.visionoperationscancel_fields;
        this.visionoperationscancel_fieldsType = config.visionoperationscancel_fieldsType || 'str';
        this.visionoperationscancel_callback = config.visionoperationscancel_callback;
        this.visionoperationscancel_callbackType = config.visionoperationscancel_callbackType || 'str';
        this.visionoperationscancel_oauthToken = config.visionoperationscancel_oauthToken;
        this.visionoperationscancel_oauthTokenType = config.visionoperationscancel_oauthTokenType || 'str';
        this.visionoperationscancel_xgafv = config.visionoperationscancel_xgafv;
        this.visionoperationscancel_xgafvType = config.visionoperationscancel_xgafvType || 'str';
        this.visionoperationscancel_alt = config.visionoperationscancel_alt;
        this.visionoperationscancel_altType = config.visionoperationscancel_altType || 'str';

        var node = this;

        node.on('input', function (msg) {
            var client = new lib.CloudVisionApi();

            if (this.service && this.service.credentials && this.service.credentials.secureTokenValue) {
                if (this.service.secureTokenIsQuery) {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, true);
                } else {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, false);
                }
            }

            client.body = msg.payload;

            var result;
            var errorFlag = false;
            if (node.method === 'visionfilesasyncBatchAnnotate') {
                var parameters = [], nodeParam, nodeParamType;

                if (typeof msg.payload === 'object') {
                    parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', '
                             + 'msg.payload must be JSON object or buffer.');
                    errorFlag = true;
                }
                
                nodeParam = node.visionfilesasyncBatchAnnotate_key;
                nodeParamType = node.visionfilesasyncBatchAnnotate_keyType;
                parameters.key = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_accessToken;
                nodeParamType = node.visionfilesasyncBatchAnnotate_accessTokenType;
                parameters.accessToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_uploadProtocol;
                nodeParamType = node.visionfilesasyncBatchAnnotate_uploadProtocolType;
                parameters.uploadProtocol = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_quotaUser;
                nodeParamType = node.visionfilesasyncBatchAnnotate_quotaUserType;
                parameters.quotaUser = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_prettyPrint;
                nodeParamType = node.visionfilesasyncBatchAnnotate_prettyPrintType;
                parameters.prettyPrint = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_uploadType;
                nodeParamType = node.visionfilesasyncBatchAnnotate_uploadTypeType;
                parameters.uploadType = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_fields;
                nodeParamType = node.visionfilesasyncBatchAnnotate_fieldsType;
                parameters.fields = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_callback;
                nodeParamType = node.visionfilesasyncBatchAnnotate_callbackType;
                parameters.callback = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_oauthToken;
                nodeParamType = node.visionfilesasyncBatchAnnotate_oauthTokenType;
                parameters.oauthToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_xgafv;
                nodeParamType = node.visionfilesasyncBatchAnnotate_xgafvType;
                parameters.xgafv = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionfilesasyncBatchAnnotate_alt;
                nodeParamType = node.visionfilesasyncBatchAnnotate_altType;
                parameters.alt = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                result = client.visionfilesasyncBatchAnnotate(parameters);
            }

            if (node.method === 'visionimagesannotate') {
                var parameters = [], nodeParam, nodeParamType;

                if (typeof msg.payload === 'object') {
                    parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', '
                             + 'msg.payload must be JSON object or buffer.');
                    errorFlag = true;
                }
                
                nodeParam = node.visionimagesannotate_key;
                nodeParamType = node.visionimagesannotate_keyType;
                parameters.key = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_accessToken;
                nodeParamType = node.visionimagesannotate_accessTokenType;
                parameters.accessToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_uploadProtocol;
                nodeParamType = node.visionimagesannotate_uploadProtocolType;
                parameters.uploadProtocol = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_quotaUser;
                nodeParamType = node.visionimagesannotate_quotaUserType;
                parameters.quotaUser = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_prettyPrint;
                nodeParamType = node.visionimagesannotate_prettyPrintType;
                parameters.prettyPrint = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_uploadType;
                nodeParamType = node.visionimagesannotate_uploadTypeType;
                parameters.uploadType = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_fields;
                nodeParamType = node.visionimagesannotate_fieldsType;
                parameters.fields = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_callback;
                nodeParamType = node.visionimagesannotate_callbackType;
                parameters.callback = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_oauthToken;
                nodeParamType = node.visionimagesannotate_oauthTokenType;
                parameters.oauthToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_xgafv;
                nodeParamType = node.visionimagesannotate_xgafvType;
                parameters.xgafv = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionimagesannotate_alt;
                nodeParamType = node.visionimagesannotate_altType;
                parameters.alt = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                result = client.visionimagesannotate(parameters);
            }

            if (node.method === 'visionoperationsdelete') {
                var parameters = [], nodeParam, nodeParamType;

                nodeParam = node.visionoperationsdelete_name;
                nodeParamType = node.visionoperationsdelete_nameType;
                parameters.name = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_key;
                nodeParamType = node.visionoperationsdelete_keyType;
                parameters.key = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_accessToken;
                nodeParamType = node.visionoperationsdelete_accessTokenType;
                parameters.accessToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_uploadProtocol;
                nodeParamType = node.visionoperationsdelete_uploadProtocolType;
                parameters.uploadProtocol = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_quotaUser;
                nodeParamType = node.visionoperationsdelete_quotaUserType;
                parameters.quotaUser = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_prettyPrint;
                nodeParamType = node.visionoperationsdelete_prettyPrintType;
                parameters.prettyPrint = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_uploadType;
                nodeParamType = node.visionoperationsdelete_uploadTypeType;
                parameters.uploadType = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_fields;
                nodeParamType = node.visionoperationsdelete_fieldsType;
                parameters.fields = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_callback;
                nodeParamType = node.visionoperationsdelete_callbackType;
                parameters.callback = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_oauthToken;
                nodeParamType = node.visionoperationsdelete_oauthTokenType;
                parameters.oauthToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_xgafv;
                nodeParamType = node.visionoperationsdelete_xgafvType;
                parameters.xgafv = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationsdelete_alt;
                nodeParamType = node.visionoperationsdelete_altType;
                parameters.alt = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                result = client.visionoperationsdelete(parameters);
            }

            if (node.method === 'visionlocationsoperationsget') {
                var parameters = [], nodeParam, nodeParamType;

                nodeParam = node.visionlocationsoperationsget_name;
                nodeParamType = node.visionlocationsoperationsget_nameType;
                parameters.name = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_key;
                nodeParamType = node.visionlocationsoperationsget_keyType;
                parameters.key = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_accessToken;
                nodeParamType = node.visionlocationsoperationsget_accessTokenType;
                parameters.accessToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_uploadProtocol;
                nodeParamType = node.visionlocationsoperationsget_uploadProtocolType;
                parameters.uploadProtocol = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_quotaUser;
                nodeParamType = node.visionlocationsoperationsget_quotaUserType;
                parameters.quotaUser = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_prettyPrint;
                nodeParamType = node.visionlocationsoperationsget_prettyPrintType;
                parameters.prettyPrint = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_uploadType;
                nodeParamType = node.visionlocationsoperationsget_uploadTypeType;
                parameters.uploadType = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_fields;
                nodeParamType = node.visionlocationsoperationsget_fieldsType;
                parameters.fields = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_callback;
                nodeParamType = node.visionlocationsoperationsget_callbackType;
                parameters.callback = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_oauthToken;
                nodeParamType = node.visionlocationsoperationsget_oauthTokenType;
                parameters.oauthToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_xgafv;
                nodeParamType = node.visionlocationsoperationsget_xgafvType;
                parameters.xgafv = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionlocationsoperationsget_alt;
                nodeParamType = node.visionlocationsoperationsget_altType;
                parameters.alt = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                result = client.visionlocationsoperationsget(parameters);
            }

            if (node.method === 'visionoperationscancel') {
                var parameters = [], nodeParam, nodeParamType;

                nodeParam = node.visionoperationscancel_name;
                nodeParamType = node.visionoperationscancel_nameType;
                parameters.name = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                if (typeof msg.payload === 'object') {
                    parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', '
                             + 'msg.payload must be JSON object or buffer.');
                    errorFlag = true;
                }
                
                nodeParam = node.visionoperationscancel_key;
                nodeParamType = node.visionoperationscancel_keyType;
                parameters.key = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_accessToken;
                nodeParamType = node.visionoperationscancel_accessTokenType;
                parameters.accessToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_uploadProtocol;
                nodeParamType = node.visionoperationscancel_uploadProtocolType;
                parameters.uploadProtocol = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_quotaUser;
                nodeParamType = node.visionoperationscancel_quotaUserType;
                parameters.quotaUser = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_prettyPrint;
                nodeParamType = node.visionoperationscancel_prettyPrintType;
                parameters.prettyPrint = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_uploadType;
                nodeParamType = node.visionoperationscancel_uploadTypeType;
                parameters.uploadType = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_fields;
                nodeParamType = node.visionoperationscancel_fieldsType;
                parameters.fields = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_callback;
                nodeParamType = node.visionoperationscancel_callbackType;
                parameters.callback = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_oauthToken;
                nodeParamType = node.visionoperationscancel_oauthTokenType;
                parameters.oauthToken = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_xgafv;
                nodeParamType = node.visionoperationscancel_xgafvType;
                parameters.xgafv = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                nodeParam = node.visionoperationscancel_alt;
                nodeParamType = node.visionoperationscancel_altType;
                parameters.alt = nodeParamType === 'str' ? nodeParam || '' : RED.util.getMessageProperty(msg, nodeParam);
                
                result = client.visionoperationscancel(parameters);
            }

            if (!errorFlag) {
                node.status({ fill: "blue", shape: "dot", text: "CloudVisionApi.status.requesting" });
                result.then(function (response) {
                    if (response.body !== null && response.body !== undefined) {
                        msg.payload = response.body;
                    }
                    node.send(msg);
                    node.status({});
                }).catch(function (error) {
                    node.error(error);
                    node.status({ fill: "red", shape: "ring", text: "node-red:common.status.error" });
                });
            }
        });
    }
    RED.nodes.registerType("cloud-vision-api", CloudVisionApiNode);

    function CloudVisionApiServiceNode(n) {
        RED.nodes.createNode(this, n);

        this.secureTokenValue = n.secureTokenValue;
        this.secureTokenHeaderOrQueryName = n.secureTokenHeaderOrQueryName;
        this.secureTokenIsQuery = n.secureTokenIsQuery;
    }
    RED.nodes.registerType("cloud-vision-api-service", CloudVisionApiServiceNode, {
        credentials: {
            secureTokenValue: { type: "password" },
            temp: { type: "text" }
        }
    });
};
