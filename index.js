function printMsg() {
    console.log("Severins package works");
}

/**
 * lineare Verzinsung Aufzinsung
 *
 * @author Severin Klug <s.klug@optica.de>
 * @param {*} K0 Anfangskapital
 * @param {*} i Zinssatz (=p/100)
 * @param {*} n Gesamtlaufzeit in Jahren
 * @returns Kn Endkapital
 */
function lineareVerzinsungAufzinsung(K0, i, n) {
    return K0 * (1+i*n);
}

/**
 * lineare Verzinsung Abzinsung
 *
 * @author Severin Klug <s.klug@optica.de>
 * @param {*} Kn Endkapital
 * @param {*} i Zinssatz (=p/100)
 * @param {*} n Gesamtlaufzeit in Jahren
 * @returns Kn Anfangskapital
 */
 function lineareVerzinsungAbzinsung(Kn, i, n) {
    return Kn / (1+i*n);
}

module.exports.printMsg = printMsg;
module.exports.lineareVerzinsungAufzinsung = lineareVerzinsungAufzinsung;
module.exports.lineareVerzinsungAbzinsung = lineareVerzinsungAbzinsung;