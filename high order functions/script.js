// 1. Pure Functions
// a pure function always produces the same output for the same input
// without modifying the external states or causing side effects

function add(a, b) {
  return a + b
}
const result = add(5, 3)

// 2. Immutable data
//  Immutable data means data the cannot be changed once created .
// Instead of modifying data we create new data

const numbers = [1, 2, 3, 4, 5]
const newNumber = [...numbers, 6]

console.log(numbers, newNumber)

// 3. Higher Order Functions
// higher-order functions are functions that can accept other functions as as
// arguments and return them as results

function filterArray(array, condition) {
  const filteredArray = []

  for(const item of array) {
    if(condition(item)) {
      filteredArray.push(item)
    }
  }
  return filteredArray
}

function isEven(number) {
  return number % 2 !== 0;
}
const nums = [1, 2, 3, 4, 5, 6]
const evenNumbers = filterArray(nums, isEven)
console.log(evenNumbers);

function customMapArray(array, transform) {
  const mappedArray = []

  for(const item of array) {
    mappedArray.push(transform(item))
  }

  return mappedArray;
}

function double(number){
  return number * 2
}

const mappedNumbers = customMapArray([1, 2, 3, 4, 5, 6], double)
console.log(mappedNumbers)


function asyncFunction () {
  return new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 6000)
  })
}

async function main() {
  const result = await asyncFunction()
  console.log(result)
  console.log("End")
}
main()

const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const obj3 = {
  name: "Alice",
  age: 25,
  address: {
    city: "San Francisco",
    zip: "94101",
  },
};

function compareObjects(obj1, obj2) {
  // Base Case: Check if both the objects are of the same type
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') { 
    return obj1 === obj2
  }


  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
}


console.log(compareObjects(obj1, obj2)); // Should return true
console.log(compareObjects(obj1, obj3)); // Should return false

// Problem: A delivery driver needs to deliver packages to several customers in a city. The driver wants to find the shortest route that starts and ends at the depot (starting point) while visiting all customer locations only once and returning to the depot.

// Information:

// The city map with roads and distances between intersections.
// Locations of customers' addresses (delivery points).
// Starting point (depot) for the driver.
// Number of packages to deliver at each customer location.
// Constraints: The driver can only visit each customer once, and the route must end at the depot.
// Solution:
// To solve this route-finding problem, you would implement an algorithm to find the optimal route for the driver. One common algorithm for solving the Traveling Salesman Problem (TSP) is the nearest neighbor algorithm. Here's a simplified JavaScript example of how you might approach this:

// Sample city map with distances between intersections (graph).
const cityMap = {
  A: { B: 5, C: 8, D: 9 },
  B: { A: 5, C: 6, D: 4 },
  C: { A: 8, B: 6, D: 7 },
  D: { A: 9, B: 4, C: 7 },
};

// Customer locations and their package counts.
const customerLocations = {
  A: 3,
  B: 2,
  C: 1,
  D: 4,
};

// Starting point (depot).
const depot = 'A';

// Function to find the nearest neighbor.
function findNearestNeighbor(currentLocation, unvisitedLocations) {
  let nearestNeighbor = null;
  let shortestDistance = Infinity;

  for (const location of unvisitedLocations) {
    const distance = cityMap[currentLocation][location];
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestNeighbor = location;
    }
  }

  return nearestNeighbor;
}

// Route planning algorithm.
function planRoute(cityMap, customerLocations, depot) {
  const unvisitedLocations = Object.keys(customerLocations);
  let currentLocation = depot;
  const route = [depot];

  while (unvisitedLocations.length > 0) {
    const nearestNeighbor = findNearestNeighbor(currentLocation, unvisitedLocations);
    route.push(nearestNeighbor);
    currentLocation = nearestNeighbor;
    unvisitedLocations.splice(unvisitedLocations.indexOf(nearestNeighbor), 1);
  }

  route.push(depot); // Return to the depot to complete the route.
  return route;
}

// Find the optimal route.
const optimalRoute = planRoute(cityMap, customerLocations, depot);
console.log('Optimal Route:', optimalRoute);

// 2. find the word boundaries and re-reverse the characters of each word