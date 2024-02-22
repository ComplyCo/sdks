/**
 * ComplyCo SDK
 * A REST API for working with ComplyCo data.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@complyco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GettaskFailureResponseBody {
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GettaskFailureResponseBody.attributeTypeMap;
    }
}

