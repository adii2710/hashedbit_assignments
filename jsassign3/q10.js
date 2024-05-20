function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

const input = "Hello";
const reversed = reverseString(input);
console.log(reversed); // Output: olleH
