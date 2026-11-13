const pc = require('picocolors');

function yellowBold(texto) {
    return pc.yellow(pc.bold(texto))
}

module.exports = {
    yellowBold: yellowBold
};