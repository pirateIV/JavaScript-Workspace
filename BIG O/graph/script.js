// graphs = nodes + edges

// represent graph information using adjacency list

// Two algorithms

// 1. Depth First Traversal - Stack
// add to the top and remove top as well


// 2. Breadth First Traversal = Queue
// add from the back and remove from the front

const {
  log, count, debug, error, group, groupCollapsed, groupEnd
} = console

// const depthFirstPrint = (graph, source) => {
//   const stack = [source]


//   while (stack.length > 0) {
//     const current = stack.pop()
//     log(current)
//     for (let neighbour of graph[current]) {}
//   }
// }


// const graph = {
//   a: ['b', 'c'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   e: [],
//   f: []
// }

// depthFirstPrint(graph, 'a') // abdfce

const bar = (str) => {
  console.log(str)
  if(str.length <= 1) {
    return
  }
  const midIndex = str.length / 2
  bar(str.slice(0, midIndex))
}
log(bar('abcdefghijklmnopqrstuvwzxyz'))