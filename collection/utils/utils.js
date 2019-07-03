export function format(first, middle, last) {
    return ((first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : ""));
}
/**
 *
 * @param color
 */
export function lightOrDark(color) {
    let r, g, b, hsp;
    if (color.match(/^rgb/)) {
        // HEX
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));
        r = color >> 16;
        g = (color >> 8) & 255;
        b = color & 255;
    }
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    // Using the HSP value, determine whether the color is light or dark
    // console.log(hsp);
    return hsp > 127.5 ? "light" : "dark";
}
/**
 * Obtener el color del texto a partir del fondo
 * @param {string} color
 */
export function getTextColor(color) {
    const backColor = lightOrDark(color);
    //  console.log(backColor);
    return backColor === "dark" ? "white" : "black";
}
