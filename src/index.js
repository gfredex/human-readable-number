module.exports = function toReadable(number) {
    let strNumber = '';
    const smalNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensNumArr = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number <= 19) {
        for (i = 0; i <= number; i++) {
            if (number === i) strNumber = smalNumArr[i];
        }
    }
    return strNumber;
}
