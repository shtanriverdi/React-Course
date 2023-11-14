function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

/** Get n rolls => [num, ...] */
function getRolls(n) {
    /*
    The Array.from() static method creates a new,
    shallow-copied Array instance
    from an iterable or array-like object.

    console.log(Array.from('foo'));
    Output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], (x) => x + x));
    Output: Array [2, 4, 6]
    */

    // This will create unique random values inside the array
    // return Array.from({ length: n }, () => d6());

    // This will create SAME elements inside the array
    // Because we call d6 once and use the same value everywhere
    // return Array(n).fill(d6());

    // Array.from is a static method, no need new keyword
    return Array.from({ length: n }, () => d6());
    // return Array.from(Array(n), () => d6()); // Alternative
}

/** Get sum of nums */
/** The reducer walks through the array element-by-element, 
 *  each step adding the current array value to the result 
 * from the previous step 
 * (this result is the running sum of all the previous steps) 
 * — until there are no more elements to add. */
function sum(nums) {
    const sum = nums.reduce((runningSum, cur) => runningSum + cur, 0);
    return sum;
}

export {
    d6,
    getRolls,
    sum
};