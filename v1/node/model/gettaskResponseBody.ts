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

export class GettaskResponseBody {
    'cancelledAt'?: string;
    'completedAt'?: string;
    'documentName'?: string;
    'expiresAt'?: string;
    'fileUrl'?: string;
    'identityEmail'?: string;
    'identityId'?: string;
    'message'?: string;
    'scrollRequired'?: boolean;
    'signatureRequired'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cancelledAt",
            "baseName": "cancelled_at",
            "type": "string"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "string"
        },
        {
            "name": "documentName",
            "baseName": "document_name",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "fileUrl",
            "baseName": "file_url",
            "type": "string"
        },
        {
            "name": "identityEmail",
            "baseName": "identity_email",
            "type": "string"
        },
        {
            "name": "identityId",
            "baseName": "identity_id",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "scrollRequired",
            "baseName": "scroll_required",
            "type": "boolean"
        },
        {
            "name": "signatureRequired",
            "baseName": "signature_required",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GettaskResponseBody.attributeTypeMap;
    }
}

