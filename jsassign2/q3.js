function findTax(salary) {
    let taxRate;
    switch (true) {
        case salary <= 500000:
            taxRate = 0;
            break;
        case salary <= 1000000:
            taxRate = 0.1;
            break;
        case salary <= 1500000:
            taxRate = 0.2;
            break;
        default:
            taxRate = 0.3;
    }
    return salary * taxRate;
}

// Example usage:
console.log(findTax(400000)); // Output: 0
console.log(findTax(600000)); // Output: 10000
console.log(findTax(1200000)); // Output: 240000
console.log(findTax(2000000)); // Output: 600000
