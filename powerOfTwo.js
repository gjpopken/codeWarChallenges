const isPowerOfTwo = (int) => {
    if (int % 2 == 0) {
        // continue checking



        for (let i = 1; i < int / 2 + 1; i++) {
            if (2**i == int) {
                return true
            }
        }




    }
    // else 
    return false;
}

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(6)); // false
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(12)); // false