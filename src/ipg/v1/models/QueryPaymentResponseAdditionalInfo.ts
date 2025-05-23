/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */

import type { PropertyValidationAttribute, ValidationErrorContext } from '../../../runtime';
import { mapValues, ValidationUtil } from '../../../runtime';
import type { PaymentView } from './PaymentView';
import {
    validatePaymentView,
    PaymentViewFromJSON,
    PaymentViewFromJSONTyped,
    PaymentViewToJSON,
    PaymentViewToJSONTyped,
} from './PaymentView';
import type { TimeDetail } from './TimeDetail';
import {
    validateTimeDetail,
    TimeDetailFromJSON,
    TimeDetailFromJSONTyped,
    TimeDetailToJSON,
    TimeDetailToJSONTyped,
} from './TimeDetail';
import type { AmountDetail } from './AmountDetail';
import {
    validateAmountDetail,
    AmountDetailFromJSON,
    AmountDetailFromJSONTyped,
    AmountDetailToJSON,
    AmountDetailToJSONTyped,
} from './AmountDetail';
import type { StatusDetail } from './StatusDetail';
import {
    validateStatusDetail,
    StatusDetailFromJSON,
    StatusDetailFromJSONTyped,
    StatusDetailToJSON,
    StatusDetailToJSONTyped,
} from './StatusDetail';
import type { VirtualAccountInfo } from './VirtualAccountInfo';
import {
    validateVirtualAccountInfo,
    VirtualAccountInfoFromJSON,
    VirtualAccountInfoFromJSONTyped,
    VirtualAccountInfoToJSON,
    VirtualAccountInfoToJSONTyped,
} from './VirtualAccountInfo';
import type { Buyer } from './Buyer';
import {
    validateBuyer,
    BuyerFromJSON,
    BuyerFromJSONTyped,
    BuyerToJSON,
    BuyerToJSONTyped,
} from './Buyer';
import type { Goods } from './Goods';
import {
    validateGoods,
    GoodsFromJSON,
    GoodsFromJSONTyped,
    GoodsToJSON,
    GoodsToJSONTyped,
} from './Goods';
import type { ShippingInfo } from './ShippingInfo';
import {
    validateShippingInfo,
    ShippingInfoFromJSON,
    ShippingInfoFromJSONTyped,
    ShippingInfoToJSON,
    ShippingInfoToJSONTyped,
} from './ShippingInfo';
import type { Seller } from './Seller';
import {
    validateSeller,
    SellerFromJSON,
    SellerFromJSONTyped,
    SellerToJSON,
    SellerToJSONTyped,
} from './Seller';

/**
 * 
 * @export
 * @interface QueryPaymentResponseAdditionalInfo
 */
export interface QueryPaymentResponseAdditionalInfo {
    /**
     * Merchant identifier
     * @type {string}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    merchantId?: string;
    /**
     * 
     * @type {Buyer}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    buyer?: Buyer;
    /**
     * 
     * @type {Seller}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    seller?: Seller;
    /**
     * 
     * @type {AmountDetail}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    amountDetail?: AmountDetail;
    /**
     * 
     * @type {TimeDetail}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    timeDetail?: TimeDetail;
    /**
     * Additional information of goods
     * @type {Array<Goods>}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    goods?: Array<Goods>;
    /**
     * Additional information of shipping
     * @type {Array<ShippingInfo>}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    shippingInfo?: Array<ShippingInfo>;
    /**
     * Additional information of memo
     * @type {string}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    orderMemo?: string;
    /**
     * Additional information of payment views
     * @type {Array<PaymentView>}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    paymentViews?: Array<PaymentView>;
    /**
     * Additional information of extend
     * @type {string}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    extendInfo?: string;
    /**
     * 
     * @type {StatusDetail}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    statusDetail?: StatusDetail;
    /**
     * Additional information of close reason
     * @type {string}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    closeReason?: string;
    /**
     * 
     * @type {VirtualAccountInfo}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    virtualAccountInfo?: VirtualAccountInfo;
}

/**
 * Check if a given object implements the QueryPaymentResponseAdditionalInfo interface.
 */
export function instanceOfQueryPaymentResponseAdditionalInfo(value: object): value is QueryPaymentResponseAdditionalInfo {
    return true;
}

export function QueryPaymentResponseAdditionalInfoFromJSON(json: any): QueryPaymentResponseAdditionalInfo {
    return QueryPaymentResponseAdditionalInfoFromJSONTyped(json, false);
}

export function QueryPaymentResponseAdditionalInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryPaymentResponseAdditionalInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'merchantId': json['merchantId'] == null ? undefined : json['merchantId'],
        'buyer': json['buyer'] == null ? undefined : BuyerFromJSON(json['buyer']),
        'seller': json['seller'] == null ? undefined : SellerFromJSON(json['seller']),
        'amountDetail': json['amountDetail'] == null ? undefined : AmountDetailFromJSON(json['amountDetail']),
        'timeDetail': json['timeDetail'] == null ? undefined : TimeDetailFromJSON(json['timeDetail']),
        'goods': json['goods'] == null ? undefined : ((json['goods'] as Array<any>).map(GoodsFromJSON)),
        'shippingInfo': json['shippingInfo'] == null ? undefined : ((json['shippingInfo'] as Array<any>).map(ShippingInfoFromJSON)),
        'orderMemo': json['orderMemo'] == null ? undefined : json['orderMemo'],
        'paymentViews': json['paymentViews'] == null ? undefined : ((json['paymentViews'] as Array<any>).map(PaymentViewFromJSON)),
        'extendInfo': json['extendInfo'] == null ? undefined : json['extendInfo'],
        'statusDetail': json['statusDetail'] == null ? undefined : StatusDetailFromJSON(json['statusDetail']),
        'closeReason': json['closeReason'] == null ? undefined : json['closeReason'],
        'virtualAccountInfo': json['virtualAccountInfo'] == null ? undefined : VirtualAccountInfoFromJSON(json['virtualAccountInfo']),
    };
}

export function QueryPaymentResponseAdditionalInfoToJSON(json: any): QueryPaymentResponseAdditionalInfo {
    return QueryPaymentResponseAdditionalInfoToJSONTyped(json, false);
}

export function QueryPaymentResponseAdditionalInfoToJSONTyped(value?: QueryPaymentResponseAdditionalInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'merchantId': value['merchantId'],
        'buyer': BuyerToJSON(value['buyer']),
        'seller': SellerToJSON(value['seller']),
        'amountDetail': AmountDetailToJSON(value['amountDetail']),
        'timeDetail': TimeDetailToJSON(value['timeDetail']),
        'goods': value['goods'] == null ? undefined : ((value['goods'] as Array<any>).map(GoodsToJSON)),
        'shippingInfo': value['shippingInfo'] == null ? undefined : ((value['shippingInfo'] as Array<any>).map(ShippingInfoToJSON)),
        'orderMemo': value['orderMemo'],
        'paymentViews': value['paymentViews'] == null ? undefined : ((value['paymentViews'] as Array<any>).map(PaymentViewToJSON)),
        'extendInfo': value['extendInfo'],
        'statusDetail': StatusDetailToJSON(value['statusDetail']),
        'closeReason': value['closeReason'],
        'virtualAccountInfo': VirtualAccountInfoToJSON(value['virtualAccountInfo']),
    };
}

const propertyValidationAttributesMap: { [property: string]: PropertyValidationAttribute } = {
    merchantId: {
        maxLength: 64,
    },
    orderMemo: {
        maxLength: 64,
    },
    extendInfo: {
        maxLength: 4096,
    },
    closeReason: {
        maxLength: 128,
    },
}

export function validateQueryPaymentResponseAdditionalInfo(value: QueryPaymentResponseAdditionalInfo): ValidationErrorContext[] {
    const validationErrorContexts: ValidationErrorContext[] = [];

    if (value == null) {
        return validationErrorContexts;
    }

    validationErrorContexts.push(...ValidationUtil.validateProperty('merchantId', value.merchantId, propertyValidationAttributesMap['merchantId']));

    validationErrorContexts.push(...validateBuyer(value.buyer));

    validationErrorContexts.push(...validateSeller(value.seller));

    validationErrorContexts.push(...validateAmountDetail(value.amountDetail));

    validationErrorContexts.push(...validateTimeDetail(value.timeDetail));

    validationErrorContexts.push(...ValidationUtil.validateProperty('orderMemo', value.orderMemo, propertyValidationAttributesMap['orderMemo']));

    validationErrorContexts.push(...ValidationUtil.validateProperty('extendInfo', value.extendInfo, propertyValidationAttributesMap['extendInfo']));

    validationErrorContexts.push(...validateStatusDetail(value.statusDetail));

    validationErrorContexts.push(...ValidationUtil.validateProperty('closeReason', value.closeReason, propertyValidationAttributesMap['closeReason']));

    validationErrorContexts.push(...validateVirtualAccountInfo(value.virtualAccountInfo));

    return validationErrorContexts;
}
