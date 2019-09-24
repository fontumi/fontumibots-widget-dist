export declare let phone: any;
/**
 * Initialize the web phone
 * @param {object} param
 * @param {string} param.to
 * @param {string} param.password
 * @param {string} param.to
 */
export declare const init: ({ login, password, to }: {
    login: any;
    password: any;
    to: any;
}) => Promise<any>;
/**
 * Make a new call
 */
export declare const call: () => void;
/**
 * Stop actual call
 */
export declare const hangup: () => void;
