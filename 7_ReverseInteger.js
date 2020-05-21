/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegative = x < 0;
    const max = Math.pow(2, 31);
    if (isNegative) {
        x = -x;
    }
    let result = 0;
    while (x > 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (result > max) {
        return 0;
    }
    if (isNegative) {
        result = -result;
    }
    return result;
};
