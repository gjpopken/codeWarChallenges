function findOdd(A) {
    let oddOne = 1;
    console.log('Odd one out:', oddOne);

    // loop through the array, and know how many unique numbers there are. Then, count each unique number, and find which is in an odd number of times. 

    // OR
    // find the first number that appears an odd number of times in the array
    for (let num in A) {
        let counter = 0;

        console.log('first number to compare:', A[num]);

        for (let otherNum in A) {
            

            // if the values of the number are the same, we add to the count
            if (A[num] === A[otherNum]) {
                counter ++;
            }

            console.log(A[num], 'is compared with', A[otherNum], 'Count is now:', counter);
        }

        // if the counter is odd, then we make the oddOne that number, and return that number, otherwise we keep going.
        if (counter%2 === 1) {
            console.log('this is odd!');
            oddOne = A[num];
            console.log('the odd one out is:', oddOne);
            return oddOne;
        } else {console.log('this is even');}
        
        
    }
  }

  findOdd([10, 10, 11, 11, 13]);
