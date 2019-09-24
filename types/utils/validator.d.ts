/**
 *
 * @param type
 * @param {string} message
 * @param {object} opts
 * @param {boolean} [opts.required=true]
 */
export declare const valid: (type: any, message: any, opts?: {
    required: boolean;
    min: any;
    max: any;
    integer: boolean;
}) => Promise<any>;
