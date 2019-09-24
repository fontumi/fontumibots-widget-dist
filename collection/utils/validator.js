import { validations, validate, extend } from 'indicative/validator';
import { sanitizations, sanitize } from 'indicative/sanitizer';
extend('phone', {
    async: false,
    compile(args) { return args; },
    validate(data) {
        return data
            .original
            .message
            .replace(/ +/g, "")
            .match(/^[0-9]*$/);
    }
});
const TYPES = {
    email: () => [
        validations.email()
    ],
    number: ({ min, max, integer }) => {
        const rules = [
            validations.number()
        ];
        if (integer) {
            rules.push(validations.integer());
        }
        if (min) {
            rules.push(validations.min(min));
        }
        if (max) {
            rules.push(validations.max(max));
        }
        return rules;
    },
    phone: () => [
        validations['phone']()
    ]
};
const required = () => [validations.required()];
const trim = () => [sanitizations.trim()];
/**
 *
 * @param type
 * @param {string} message
 * @param {object} opts
 * @param {boolean} [opts.required=true]
 */
export const valid = async (type, message, opts = {
    required: true,
    min: null,
    max: null,
    integer: false
}) => {
    const data = {
        message
    };
    const sanitizat = [
        ...trim()
    ];
    if (type === "email") {
        sanitizat.push(sanitizations.normalizeEmail());
    }
    sanitize(data, {
        message: sanitizat
    });
    let rules = [];
    if (opts.required) {
        rules = [
            ...rules,
            ...required()
        ];
    }
    if (TYPES[type]) {
        rules = [
            ...rules,
            ...TYPES[type](opts)
        ];
    }
    return validate(data, { message: rules });
};
