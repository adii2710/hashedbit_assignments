function sumOfProducts(n1, n2) {
    let sum = 0;
    n1 = n1.toString();
    n2 = n2.toString();

    for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
        let digit1 = parseInt(n1[i]) || 0;
        let digit2 = parseInt(n2[i]) || 0;
        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34)); // Output: 24
console.log(sumOfProducts(123, 456)); // Output: 28 (1*4 + 2*5 + 3*6)

