const customers = [
  {id:1, title: 'John', index: 1},
  {id:2, title: 'Mark', index: 2},
  {id:3, title: 'Nathan', index: 3},
  {id:4, title: 'Julian', index: 4},
  {id:5, title: 'Clio', index: 5}
]

let delete_customers = [3, 5]

let new_customers = customers.filter(customer => {
  return !(delete_customers.includes(customer['index']))
}).map((e, i) => {
  e['index'] = i + 1
  return e
})

console.log(new_customers)