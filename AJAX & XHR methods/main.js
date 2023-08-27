const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("load", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("error fetching data", undefined);
    }
  });

  request.open("GET", "todos.json");
  request.send();
};

console.log(1)
console.log(2)

getTodos((err, data) => {
  console.log("callback fired");
  err ? console.log(err) : console.log(data);
});
  
console.log(3)
console.log(4)

// JSON - JavaScript Object Notation