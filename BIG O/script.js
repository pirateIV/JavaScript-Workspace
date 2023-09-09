// The complete Guide to Big O Notation and Complexity Analysis for Algorithms
// Learning Objectives

/*
    >   Explore the 7 common complexity classes
    >   Analyze function with multiple functions
    >   Visualize the space complexity of recursive functions
*/

/*
    1.  Constant - O(1)
        > the number of steps does not depend on the input size
*/

// const foo = (num) => {
//   let result = 0;

//   for (let i = 0; i < 5; i++) {
//     result += num;
//   }

//   return result;
// };
// console.log(foo(5))

const array = (arr) => arr[0] * arr[arr.length - 1];
// console.log(array([2, 4, 5, 8, 9, 7]))

/*
    2.  Logarithm - O(log(n))
        > the number of steps can be expressed as a logarithm
        on the input size

    --> Logarithms explained
        > a log is an opposite of an exponent
        > An exponent is a repeated multiplication, log is reapeated division

*/

// Example
// const fun = (n) => {
//   while (n > 1) {
//     console.log(Number(n));
//     n /= 2;
//   }
//   console.log("done");
// };
// console.log(fun(32));

const group = [{
    name: "Benjamin",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
  {
    name: "Sammy",
    level: 2,
    class: "JavaScript"
  },
];

// for (let i = 0; i < group.length; i++) {
//   console.group(group[i].name);
//   console.log("Level", group[i].level);
//   console.log("Class", group[i].class);
//   console.groupEnd();
// }

// function firstAndLast() {
//   const arr = [3, 4, 5, 12, 40, 51, 43]

//   const mulitply = arr[0] * arr[arr.length - 1]
//   console.log(arr[0])
//   console.log(arr[arr.length - 1])

//   console.log(mulitply)
// }
// firstAndLast()


// Linear functions
// const myFunction = (n) => {
//   if (n <= 1) {
//     console.log("hooray");
//     return;
//   }

//   console.log(n);
//   myFunction(n / 2);
// };
// console.log(myFunction(30));

// const bar = (num) => {
//   if (num === 0) return;
//   console.log(num);
//   bar(num - 1);
// };
// console.log(bar(10));

// // Loglinear functions - O(n * log(n)) nLogn

// const logLinearFunction = (string) => {
//   console.log(`${string}, ${string.length}`)

//   if(string <= 1) return;
//   const midIndex = Math.floor(string.length / 2)
//   logLinearFunction(string.slice(0, midIndex))
// }

// console.log(logLinearFunction('abcdefghijklmnopqrstuvwxyz'))

// function minus(string) {
//   console.log(string, string.length)

//   if(string.length === 1) return;
//   minus(string.slice(0, string.length - 1))
//   // minus(string.slice(string.length -))
// }
// console.log(minus('abcdefghijklmnopqrstuvwxyz'))

// // 0(n(log(n))) - time complexity

// function declare(array) {
//   let str = ''
//   for(let i = 0; i < array.length; i++) {
//     str += array[i]
//   }
//   console.log(str)

//   if(array.length <= 1) return;

//   const midIndex = Math.floor(array.length / 2)
//   const left = array.slice(0, midIndex)
//   const right = array.slice(midIndex)
//   declare(left)
//   declare(right)
// }

// console.log(declare['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])

// O(log(n)) // 

// In this log of n the hidden base will be the number n was divided by

const foo = (n) => {
  if (n <= 1) {
    console.log('done')
    return
  }

  console.log(n)
  foo(n / 2)

}

console.log(foo(16))

// const reverse = (count) => {
//   if (count === 0) {
//     console.log('done');
//     return 1
//   }


//   const n = 2 * reverse(count - 1)
//   console.log(n, count)
//   return n
// }
// console.log(reverse(10))


const isEven = (num) => {
  return num % 2 === 0;
}

console.log(isEven(11))


// functional Javascript

// In general, functions that operate on other functions, either by taking 
// them as arguments or my returning them(or both), are called higher order functions

// A higher-order function is a function that can take another function as an argument

function iAmACallbackFunction() {
  console.log('callback has been invoked')
}

function iAmJustAFunction(callbackFn) {

  callbackFn()
}
console.log(iAmJustAFunction(iAmACallbackFunction))

let startTime, endTime;

function myFunction() {
  // slow code you want to measure
}
// get the start time
startTime = performance.now()
// call the time consuming function
myFunction()
endTime = performance.now()

console.debug("Elapsed Time: ", (endTime - startTime))

let timeStart, timeEnd;

let arr = []
timeStart = Date.now()
for(let i = 0; i < 1000000; i++) {
  arr.push(i ? i % 2 === 0 : '')
}
console.log(arr)
console.log("Elapsed Time: ", (Date.now() - timeStart))