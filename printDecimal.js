//@ sourceURL=binaryDecimal.js
/**
 * PrintBinary of decimal.
 * Forgot where I foudn this question...
 * For example given 6.25, return 110.01, including dots and the decimal part of the number.
 * For those that can't be parsed to ligel binary, return false.
 */
var binaryDecimal = function(str) {
    
    var result = (str + "").split("."),
        dec = +("0." + result[1]),
        result = (+result[0]).toString(2) + ".",
        tmpBit = 1 / 2;
    
    while (dec) {
        // not ends with 5, that's not possible.
        if (!(dec + "").match(/5$/)) return false;
        
        if (dec >= tmpBit) {
            dec = dec - tmpBit;
            result += "1";
        } else {
            result += "0";
        }
        tmpBit = tmpBit / 2;
    }
    
    return result;
}