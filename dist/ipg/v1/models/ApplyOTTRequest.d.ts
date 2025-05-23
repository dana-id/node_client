/**
 * NOTE: This class is auto generated by DANA Indonesia.
 * Do not edit the class manually.
 */
import type { ValidationErrorContext } from '../../../runtime';
import type { ApplyOTTRequestAdditionalInfo } from './ApplyOTTRequestAdditionalInfo';
/**
 *
 * @export
 * @interface ApplyOTTRequest
 */
export interface ApplyOTTRequest {
    /**
     *
     * @type {ApplyOTTRequestAdditionalInfo}
     * @memberof ApplyOTTRequest
     */
    additionalInfo: ApplyOTTRequestAdditionalInfo;
}
/**
 * Check if a given object implements the ApplyOTTRequest interface.
 */
export declare function instanceOfApplyOTTRequest(value: object): value is ApplyOTTRequest;
export declare function ApplyOTTRequestFromJSON(json: any): ApplyOTTRequest;
export declare function ApplyOTTRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyOTTRequest;
export declare function ApplyOTTRequestToJSON(json: any): ApplyOTTRequest;
export declare function ApplyOTTRequestToJSONTyped(value?: ApplyOTTRequest | null, ignoreDiscriminator?: boolean): any;
export declare function validateApplyOTTRequest(value: ApplyOTTRequest): ValidationErrorContext[];
