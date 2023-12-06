const baseURL = 'http://localhost:3005/users'

const users = fetch(baseURL)
  .then(res => {
    console.log(res)
    return res.json();
  })
  .then(users => {
    return users 
  });

// const deleteUser = (id) => {
//   const user = fetch(`${baseURL}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8'
//     }
//   }).then((res) => {
//     return res.json()
//   }).then(deletedUser => {
//     console.log(deletedUser)
//   }).catch(error => {
//     console.log(error)
//   })
// }

const addUser = () => {
  fetch(baseURL, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: users.length + 1,
      username: 'user11',
      email: 'user11@gmail.com',
      age: 23    })
  }).then((res) => {
    if(!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    return res.json()
  }).then(newUser => {
    console.log(newUser)
  }).catch(error => {
    console.log(error)
  })
}

addUser()

// deleteUser(6)
console.log(users)