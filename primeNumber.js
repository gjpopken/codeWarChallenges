const isPrime = (int) => {
    for (let i = 2; i < Math.ceil(int/2); i++) {
        if (int % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(1)); // expecting: false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(11));  // true
console.log(isPrime(6)); // false
