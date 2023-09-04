// graphs = nodes + edges

// represent graph information using adjacency list

// Two algorithms

// 1. Depth First Traversal - Stack
// add to the top and remove top as well


// 2. Breadth First Traversal = Queue
// add from the back and remove from the front

const {
  log
} = console

const depthFirstPrint = (graph, source) => {
  const stack = [source]


  while (stack.length > 0) {
    const current = stack.pop()
    log(current)
    for (let neighbour of graph[current]) {}
  }
}


const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstPrint(graph, 'a') // abdfce