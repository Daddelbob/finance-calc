function printMsg() {
    console.log("Severins package works");
}

/**
 * K0 = Anfangskapital; i = Zinssatz (=p/100); n = Gesamtlaufzeit in Jahren
 */
function lineareVerzinsungAufzinsung(K0, i, n) {
    return K0 * (1+i*n);
}

/**
 * K0 = Anfangskapital
 * i = Zinssatz (=p/100)
 * n = Gesamtlaufzeit in Jahren
 */
 function lineareVerzinsungAufzinsung(K0, i, n) {
    return K0 * (1+i*n);
}

module.exports.printMsg = printMsg;