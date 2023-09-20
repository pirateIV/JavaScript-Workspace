// Defined a class for the linked list

class Task {
  constructor(description){
    this.description = description
    this.next = null;
  }
}
// intialize an empty linked list
let head = null

// function to add a task to the linked list
function addTask(description) {
  const newTask = new Task(description)
  if(!head) {
    head = newTask
  } else {
    let current = head
    while(current.next){
      current = current.next
    }

    current.next = newTask
  }
}

// function to display tasks from the linked list
function displayTasks() {
  let current = head;
  while(current) {
    console.log(current.description)
    current = current.next
  }
}

const taskArray = [];

// initialize an empty array to store tasks
function addTaskToArray(description) {
  taskArray.push(description)
}

function displayTasksFromArray() {
  taskArray.forEach((task, idx) => {
    console.log(`Task ${idx + 1}: ${task}`)
  })
}

// function to display tasks from the array
addTask("Buy groceries")
addTask("Complete Homework")
addTaskToArray("Walk the dog")
addTaskToArray("Write a Report")

// Display tasks from both data structures
console.log("Tasks in Linked List:");
displayTasks();
console.log("\nTasks in Array:");
displayTasksFromArray();
