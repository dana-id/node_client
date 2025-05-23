/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
/**
 *
 * @export
 * @interface Seller
 */
export interface Seller {
    /**
     * Type of external user. Required if externalUserId is filled
     * @type {string}
     * @memberof Seller
     */
    externalUserType?: string;
    /**
     * Nickname, user's nick name in DANA's
     * @type {string}
     * @memberof Seller
     */
    nickname?: string;
    /**
     * External user identifier. Required if externalUserType is filled
     * @type {string}
     * @memberof Seller
     */
    externalUserId?: string;
    /**
     * DANA's user identifier
     * @type {string}
     * @memberof Seller
     */
    userId?: string;
}
/**
 * Check if a given object implements the Seller interface.
 */
export declare function instanceOfSeller(value: object): value is Seller;
export declare function SellerFromJSON(json: any): Seller;
export declare function SellerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seller;
export declare function SellerToJSON(json: any): Seller;
export declare function SellerToJSONTyped(value?: Seller | null, ignoreDiscriminator?: boolean): any;
export declare function validateSeller(value: Seller): ValidationErrorContext[];
