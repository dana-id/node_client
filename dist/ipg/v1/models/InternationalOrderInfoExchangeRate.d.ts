/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
/**
 * Define the detail of exchange rate information
 * @export
 * @interface InternationalOrderInfoExchangeRate
 */
export interface InternationalOrderInfoExchangeRate {
    /**
     * Rate of exchange value represents the relation between two currencies. For example, 15917.2690 indicates that one USD is equivalent to 15917.2690 IDR
     * @type {string}
     * @memberof InternationalOrderInfoExchangeRate
     */
    rate?: string;
    /**
     * Exchange rate between two currencies. For example USD/IDR, refers to how much of one currency (in this case, Indonesian Rupiah or IDR) can be exchanged for one unit of another currency (in this case, US Dollar or USD)
     * @type {string}
     * @memberof InternationalOrderInfoExchangeRate
     */
    exchangeRelation?: string;
}
/**
 * Check if a given object implements the InternationalOrderInfoExchangeRate interface.
 */
export declare function instanceOfInternationalOrderInfoExchangeRate(value: object): value is InternationalOrderInfoExchangeRate;
export declare function InternationalOrderInfoExchangeRateFromJSON(json: any): InternationalOrderInfoExchangeRate;
export declare function InternationalOrderInfoExchangeRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternationalOrderInfoExchangeRate;
export declare function InternationalOrderInfoExchangeRateToJSON(json: any): InternationalOrderInfoExchangeRate;
export declare function InternationalOrderInfoExchangeRateToJSONTyped(value?: InternationalOrderInfoExchangeRate | null, ignoreDiscriminator?: boolean): any;
export declare function validateInternationalOrderInfoExchangeRate(value: InternationalOrderInfoExchangeRate): ValidationErrorContext[];
