// Memoization in JS
// Memoization is an optimization technique used to reduce time-consuming calculations by caching results of previous inputs.

const calc = (n) => {
    let sum = 0; // Declare sum locally
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
};

const memoize = (fun) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log("Returning from cache");
            return cache[n];
        } else {
            console.log("Calculating for the first time");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    };
};

console.time();
const memoizeCalc = memoize(calc);
console.log(memoizeCalc(10)); // Calculates and caches the result
console.log(memoizeCalc(10)); // Returns the result from cache
console.timeEnd();
