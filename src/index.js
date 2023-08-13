module.exports = function toReadable(number) {
    let strNumber = '';
    let tempNum = number;
    let numLength = String(tempNum).length;
    const smalNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensNumArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numLength === 3) {
        tempNum = Math.trunc(number / 100);
        for (i = 0; i <= tempNum; i++) {
            if (i === 0) strNumber += '';
            else if (i === tempNum) { strNumber += smalNumArr[i] + ' hundred '; }
        }
        tempNum = number - tempNum * 100;
    }

    numLength = String(tempNum).length;
    if ((numLength === 2) && ((number % 100) >= 20)) {
        tempNum = Math.trunc((number % 100) / 10);
        console.log(tempNum)
        for (i = 0; i <= tempNum; i++) {
            if (tempNum === i) { strNumber += tensNumArr[i - 2]; }
            // else if (i === 0) { strNumber += ''; }
        }
        tempNum = number % 100;
        // console.log(tempNum)
        tempNum = tempNum - Math.trunc((number % 100) / 10) * 10;
        console.log(tempNum)
        for (i = 0; i <= tempNum; i++) {
            if (i === 0) { strNumber += ''; }
            else if (i === tempNum) { strNumber += ' ' + smalNumArr[i]; }
        }
    } else if ((number % 100) < 20) {
        tempNum = number % 100;
        // console.log(tempNum);
        for (i = 0; i <= tempNum; i++) {
            if (i === 0) { strNumber += ''; }
            else if (i === tempNum) { strNumber += smalNumArr[i]; }
        }
    }
    if ((numLength === 1) && (number === 0)) strNumber = smalNumArr[0];

    if (strNumber[strNumber.length - 1] == ' ') { strNumber = strNumber.slice(0, -1); }

    return strNumber;
}
