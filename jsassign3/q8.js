function repeatedSumOfDigits(number) {
    let numStr = number.toString();
    const sumOfDigits = (numStr) => {
        return numStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    };

    while (numStr.length > 1) {
        numStr = sumOfDigits(numStr).toString();
    }

    return parseInt(numStr);
}

console.log(repeatedSumOfDigits(456)); // Output: 6
