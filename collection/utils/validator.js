import { default as indicative } from "indicative";
/**
 * Valida un mensaje.
 * @param {string} type
 * @param {string} message
 * @param {object} opts
 * @async
 */
export const valid = async (type, message, opts = { integer: false, max: false, min: false, required: true }) => {
    message = message.trim();
    if (type === "phone") {
        type = "number";
        opts["integer"] = true;
        message = message.replace(/ /g, "");
    }
    else if (["text", "yesno"].indexOf(type) > -1) {
        type = "string";
    }
    const rules = Object.keys(opts)
        .filter(k => !!opts[k])
        .map(k => {
        if (k == "max" || k == "min") {
            return `${k}:${opts[k]}`;
        }
        return k;
    })
        .join("|");
    console.log(message, `${type}|${rules}`);
    return indicative.validate({
        message
    }, {
        message: `${type}|${rules}`
    });
};
