/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
    if(numRows <2 || s.length < numRows) {
        return s
    }
    let rowMap = {};
    for (let i = 1; i <= numRows; i++) {
        rowMap[i] = ''
    }
    let rowFlag = 1;
    let isRaising = true;
    for( let j = 0; j < s.length; j++) {
        rowMap[rowFlag]+=s[j]
        if(isRaising){
            rowFlag++
            rowFlag===numRows && (isRaising = false)
        } else {
            rowFlag--
            rowFlag===1 && (isRaising = true)
        }
    }
    let result = '';
    for (let i = 1; i <= numRows; i++) {
        result += rowMap[i]
    }
    return result
};