"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlParamTypeEnum = void 0;
exports.instanceOfUrlParam = instanceOfUrlParam;
exports.UrlParamFromJSON = UrlParamFromJSON;
exports.UrlParamFromJSONTyped = UrlParamFromJSONTyped;
exports.UrlParamToJSON = UrlParamToJSON;
exports.UrlParamToJSONTyped = UrlParamToJSONTyped;
exports.validateUrlParam = validateUrlParam;
const runtime_1 = require("../../../runtime");
/**
 * @export
 */
exports.UrlParamTypeEnum = {
    PayReturn: 'PAY_RETURN',
    Notification: 'NOTIFICATION'
};
/**
 * Check if a given object implements the UrlParam interface.
 */
function instanceOfUrlParam(value) {
    if (!('url' in value) || value['url'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('isDeeplink' in value) || value['isDeeplink'] === undefined)
        return false;
    return true;
}
function UrlParamFromJSON(json) {
    return UrlParamFromJSONTyped(json, false);
}
function UrlParamFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'],
        'type': json['type'],
        'isDeeplink': json['isDeeplink'],
    };
}
function UrlParamToJSON(json) {
    return UrlParamToJSONTyped(json, false);
}
function UrlParamToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'type': value['type'],
        'isDeeplink': value['isDeeplink'],
    };
}
const propertyValidationAttributesMap = {
    url: {
        maxLength: 512,
    },
    type: {
        maxLength: 32,
    },
    isDeeplink: {
        maxLength: 1,
    },
};
function validateUrlParam(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('url', value.url, propertyValidationAttributesMap['url']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('type', value.type, propertyValidationAttributesMap['type']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('isDeeplink', value.isDeeplink, propertyValidationAttributesMap['isDeeplink']));
    return validationErrorContexts;
}
