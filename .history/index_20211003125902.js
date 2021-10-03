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
 * Kn = Endkapital; i = Zinssatz (=p/100); n = Gesamtlaufzeit in Jahren
 */
 function lineareVerzinsungAbzinsung(Kn, i, n) {
    return K0 * (1+i*n);
}

module.exports.printMsg = printMsg;