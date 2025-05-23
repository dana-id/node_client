/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
import type { PaymentView } from './PaymentView';
import type { TimeDetail } from './TimeDetail';
import type { AmountDetail } from './AmountDetail';
import type { StatusDetail } from './StatusDetail';
import type { VirtualAccountInfo } from './VirtualAccountInfo';
import type { Buyer } from './Buyer';
import type { Goods } from './Goods';
import type { ShippingInfo } from './ShippingInfo';
import type { Seller } from './Seller';
/**
 *
 * @export
 * @interface QueryPaymentResponseAdditionalInfo
 */
export interface QueryPaymentResponseAdditionalInfo {
    /**
     * Additional information of buyer
     * @type {Buyer}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    buyer?: Buyer;
    /**
     * Additional information of seller
     * @type {Seller}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    seller?: Seller;
    /**
     * Additional information of amount detail. Present if transaction found
     * @type {AmountDetail}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    amountDetail?: AmountDetail;
    /**
     * Additional information of time detail. Present if transaction found
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
     * Additional information of payment views. Present if transaction found
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
     * Additional information of status detail
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
     * Additional information of virtual account. Only use for Payment Gateway service
     * @type {VirtualAccountInfo}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    virtualAccountInfo?: VirtualAccountInfo;
    /**
     * Merchant identifier
     * @type {string}
     * @memberof QueryPaymentResponseAdditionalInfo
     */
    merchantId?: string;
}
/**
 * Check if a given object implements the QueryPaymentResponseAdditionalInfo interface.
 */
export declare function instanceOfQueryPaymentResponseAdditionalInfo(value: object): value is QueryPaymentResponseAdditionalInfo;
export declare function QueryPaymentResponseAdditionalInfoFromJSON(json: any): QueryPaymentResponseAdditionalInfo;
export declare function QueryPaymentResponseAdditionalInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryPaymentResponseAdditionalInfo;
export declare function QueryPaymentResponseAdditionalInfoToJSON(json: any): QueryPaymentResponseAdditionalInfo;
export declare function QueryPaymentResponseAdditionalInfoToJSONTyped(value?: QueryPaymentResponseAdditionalInfo | null, ignoreDiscriminator?: boolean): any;
export declare function validateQueryPaymentResponseAdditionalInfo(value: QueryPaymentResponseAdditionalInfo): ValidationErrorContext[];
