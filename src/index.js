module.exports = function toReadable(number) {
    let strNumber = '';
    let numDigits = 0;
    const smalNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensNumArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number <= 19) {
        for (i = 0; i <= number; i++) {
            if (number === i) strNumber = smalNumArr[i];
        }
    } else if (number >= 20) {
        if (String(number).length === 2) {
            for (i = 0; i <= tensNumArr.length; i++) {
                if (String(number)[0] == (i + 2)) strNumber += tensNumArr[i];
            }
            for (i = 0; i <= smalNumArr.length; i++) {
                if ((String(number)[1] == i) && (i > 0)) strNumber += ' ' + smalNumArr[i];
                else strNumber += '';
            }
        }
    }
    return strNumber;
}
