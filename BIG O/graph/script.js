// graphs = nodes + edges

// represent graph information using adjacency list

// Two algorithms

// 1. Depth First Traversal - Stack
  // add to the top and remove top as well


// 2. Breadth First Traversal = Queue
  // add from the back and remove from the front

const depthFirstPrint = ( graph, sourceNode ) => {
  const stack = [ sourceNode ] ;

  while ( stack.length > 0 ) {
    const current = stack.pop()
    console.log(current)
    for ( let neighbour of  graph[current] ) {
      stack.push( neighbour )
    }
  }
};


const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstPrint(graph, 'a') // abdfce