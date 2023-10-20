/**
 *
 * The [].reduce() method runs a function that passes the return value *to the next iteration of the function using values in the array from *left to right and returning a final value.
 */

// add up numbers in the array from left to right

var reduceMethod = [5, 5, 5, 2].reduceRight(function(accumulator, value, valueIndex, wholeArray) {
  return accumulator + value
}, 0)
console.log(reduceMethod)