"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateOrderByRedirectRequest = instanceOfCreateOrderByRedirectRequest;
exports.CreateOrderByRedirectRequestFromJSON = CreateOrderByRedirectRequestFromJSON;
exports.CreateOrderByRedirectRequestFromJSONTyped = CreateOrderByRedirectRequestFromJSONTyped;
exports.CreateOrderByRedirectRequestToJSON = CreateOrderByRedirectRequestToJSON;
exports.CreateOrderByRedirectRequestToJSONTyped = CreateOrderByRedirectRequestToJSONTyped;
exports.validateCreateOrderByRedirectRequest = validateCreateOrderByRedirectRequest;
const runtime_1 = require("../../../runtime");
const CreateOrderByRedirectAdditionalInfo_1 = require("./CreateOrderByRedirectAdditionalInfo");
const Money_1 = require("./Money");
const UrlParam_1 = require("./UrlParam");
/**
 * Check if a given object implements the CreateOrderByRedirectRequest interface.
 */
function instanceOfCreateOrderByRedirectRequest(value) {
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
function CreateOrderByRedirectRequestFromJSON(json) {
    return CreateOrderByRedirectRequestFromJSONTyped(json, false);
}
function CreateOrderByRedirectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'additionalInfo': json['additionalInfo'] == null ? undefined : (0, CreateOrderByRedirectAdditionalInfo_1.CreateOrderByRedirectAdditionalInfoFromJSON)(json['additionalInfo']),
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
function CreateOrderByRedirectRequestToJSON(json) {
    return CreateOrderByRedirectRequestToJSONTyped(json, false);
}
function CreateOrderByRedirectRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'additionalInfo': (0, CreateOrderByRedirectAdditionalInfo_1.CreateOrderByRedirectAdditionalInfoToJSON)(value['additionalInfo']),
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
function validateCreateOrderByRedirectRequest(value) {
    const validationErrorContexts = [];
    if (value == null) {
        return validationErrorContexts;
    }
    validationErrorContexts.push(...(0, CreateOrderByRedirectAdditionalInfo_1.validateCreateOrderByRedirectAdditionalInfo)(value.additionalInfo));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('partnerReferenceNo', value.partnerReferenceNo, propertyValidationAttributesMap['partnerReferenceNo']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('merchantId', value.merchantId, propertyValidationAttributesMap['merchantId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('subMerchantId', value.subMerchantId, propertyValidationAttributesMap['subMerchantId']));
    validationErrorContexts.push(...(0, Money_1.validateMoney)(value.amount));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('externalStoreId', value.externalStoreId, propertyValidationAttributesMap['externalStoreId']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('validUpTo', value.validUpTo, propertyValidationAttributesMap['validUpTo']));
    validationErrorContexts.push(...runtime_1.ValidationUtil.validateProperty('disabledPayMethods', value.disabledPayMethods, propertyValidationAttributesMap['disabledPayMethods']));
    return validationErrorContexts;
}
