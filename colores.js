const pc = require('picocolors');

function yellowBold(texto) {
    return pc.yellow(pc.bold(texto))
}

function greenBold(texto) {
    return pc.green(pc.bold(texto));
}

function redBold(texto) {
    return pc.red(pc.bold(texto));
}

module.exports = {
    yellowBold: yellowBold,
    greenBold: greenBold,
    redBold: redBold
};