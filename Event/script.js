// const seconds = new Date().getTime() / 1000;
// setTimeout(() => {
//   console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds `);
// }, 500);

// while (true) {
//   if (new Date().getTime() / 1000 - seconds >= 2) {
//     console.log("Good looped for two seconds");
//     break;
//   }
// }

// (() => {
//   console.log("this is the start");
//   setTimeout(() => {
//     console.log('Callback 1: this is a msg from call back')
//   }); // this has a default value of 
//   console.log('this is just a message')

//   setTimeout(() => {
//     console.log('Callback 2: this is msg from callback 2')
//   })

//   console.log('this is the end')
// })();


// const makeCounter = () => {
//   let counter = 0;

//   return {
//     value: () => {
//       return counter
//     },
//     increment: () => {
//       counter++
//     }
//   }
// }

// let a = makeCounter()
// let b = makeCounter()

// a.increment()
// a.increment()
// a.increment()

// console.log(a.value())
// console.log(b.value())

const Todos = (arr, todo) => {

  return {
    value: function() {
      return todo.value
    },
    addToTodos: function() {
      arr.push(todo.value)
    }

  }
}

const firstTodo = Todos()
firstTodo.addToTodos([], todoValue)

[1,2, 3, 4].forEach((item, i), function(item) {
  const listItem = document.createElement('li')
  listItem.textContent = document.createTextNode(item, i)
})