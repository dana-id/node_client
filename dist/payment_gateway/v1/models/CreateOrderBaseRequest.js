"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateOrderBaseRequest = instanceOfCreateOrderBaseRequest;
exports.CreateOrderBaseRequestFromJSON = CreateOrderBaseRequestFromJSON;
exports.CreateOrderBaseRequestFromJSONTyped = CreateOrderBaseRequestFromJSONTyped;
exports.CreateOrderBaseRequestToJSON = CreateOrderBaseRequestToJSON;
exports.CreateOrderBaseRequestToJSONTyped = CreateOrderBaseRequestToJSONTyped;
exports.validateCreateOrderBaseRequest = validateCreateOrderBaseRequest;
const runtime_1 = require("../../../runtime");
const Money_1 = require("./Money");
const UrlParam_1 = require("./UrlParam");
/**
 * Check if a given object implements the CreateOrderBaseRequest interface.
 */
function instanceOfCreateOrderBaseRequest(value) {
    if (!('partnerReferenceNo' in value) || value['partnerReferenceNo'] === undefined)
        return false;
    if (!('merchantId' in value) || value['merchantId'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('urlParams' in value) || value['urlParams'] === undefined)
        return false;
    return true;
}
function CreateOrderBaseRequestFromJSON(json) {
    return CreateOrderBaseRequestFromJSONTyped(json, false);
}
function CreateOrderBaseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'partnerReferenceNo': json['partnerReferenceNo'],
        'merchantId': json['merchantId'],
        'subMerchantId': json['subMerchantId'] == null ? undefined : json['subMerchantId'],
        'amount': (0, Money_1.MoneyFromJSON)(json['amount']),
        'externalStoreId': json['externalStoreId'] == null ? undefined : json['externalStoreId'],
        'validUpTo': json['validUpTo'] == null ? undefined : json['validUpTo'],
        'disabledPayMethods': json['disabledPayMethods'] == null ? undefined : json['disabledPayMethods'],
        'urlParams': (json['urlParams'].map(UrlParam_1.UrlParamFromJSON)),
    };
}
function CreateOrderBaseRequestToJSON(json) {
    return CreateOrderBaseRequestToJSONTyped(json, false);
}
function CreateOrderBaseRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'partnerReferenceNo': value['partnerReferenceNo'],
        'merchantId': value['merchantId'],
        'subMerchantId': value['subMerchantId'],
        'amount': (0, Money_1.MoneyToJSON)(value['amount']),
        'externalStoreId': value['externalStoreId'],
        'validUpTo': value['validUpTo'],
        'disabledPayMethods': value['disabledPayMethods'],
        'urlParams': (value['urlParams'].map(UrlParam_1.UrlParamToJSON)),
    };
}
const propertyValidationAttributesMap = {
    partnerReferenceNo: {
        maxLength: 64,
    },
    merchantId: {
        maxLength: 64,
    },
    subMerchantId: {
        maxLength: 32,
    },
    externalStoreId: {
        maxLength: 64,
    },
    validUpTo: {
        maxLength: 25,
        pattern: new RegExp('/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\+07:00$/'.slice(1, -1)),
    },
    disabledPayMethods: {
        maxLength: 64,
    },
};
function validateCreateOrderBaseRequest(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('partnerReferenceNo', value.partnerReferenceNo, propertyValidationAttributesMap['partnerReferenceNo']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('merchantId', value.merchantId, propertyValidationAttributesMap['merchantId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('subMerchantId', value.subMerchantId, propertyValidationAttributesMap['subMerchantId']));
    validationErrorContexts.push(...(0, Money_1.validateMoney)(value.amount));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('externalStoreId', value.externalStoreId, propertyValidationAttributesMap['externalStoreId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('validUpTo', value.validUpTo, propertyValidationAttributesMap['validUpTo']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('disabledPayMethods', value.disabledPayMethods, propertyValidationAttributesMap['disabledPayMethods']));
    return validationErrorContexts;
}
