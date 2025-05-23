"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAuditInfo = instanceOfAuditInfo;
exports.AuditInfoFromJSON = AuditInfoFromJSON;
exports.AuditInfoFromJSONTyped = AuditInfoFromJSONTyped;
exports.AuditInfoToJSON = AuditInfoToJSON;
exports.AuditInfoToJSONTyped = AuditInfoToJSONTyped;
exports.validateAuditInfo = validateAuditInfo;
const runtime_1 = require("../../../runtime");
/**
 * Check if a given object implements the AuditInfo interface.
 */
function instanceOfAuditInfo(value) {
    return true;
}
function AuditInfoFromJSON(json) {
    return AuditInfoFromJSONTyped(json, false);
}
function AuditInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'actionReason': json['actionReason'] == null ? undefined : json['actionReason'],
        'thirdClientId': json['thirdClientId'] == null ? undefined : json['thirdClientId'],
    };
}
function AuditInfoToJSON(json) {
    return AuditInfoToJSONTyped(json, false);
}
function AuditInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'actionReason': value['actionReason'],
        'thirdClientId': value['thirdClientId'],
    };
}
const propertyValidationAttributesMap = {
    actionReason: {
        maxLength: 256,
    },
    thirdClientId: {
        maxLength: 32,
    },
};
function validateAuditInfo(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('actionReason', value.actionReason, propertyValidationAttributesMap['actionReason']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('thirdClientId', value.thirdClientId, propertyValidationAttributesMap['thirdClientId']));
    return validationErrorContexts;
}
