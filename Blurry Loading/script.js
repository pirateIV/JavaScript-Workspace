const existing = {
  a: 1,
  b: 2,
  c: 3
}

// const clone = Object.assign(existing, {d:4, e:5})

// const { ...clone } = existing
// console.log(clone)

// If you need to support older versions of JavaScript, the most compatible 
// way to clone an Object is by manually iterating over its properties
// and filtering out inherited ones

let clone = {}

for (let prop in existing) {
  if (existing.hasOwnProperty(prop)) {
    clone[prop] = existing[prop]
  }
}

// Binding function textcontent
// const monitor = {
//   threshold: 5,
//   check: (value) => {
//     if(value > this.threshold){
//       this.displayMsg('the value is too high')
//     }
//   },
//   displayMsg(message){
//     alert(message)
//   }
// }
// monitor.check(4); // The value of `this` is implied by the method call syntax.

const monitor = {
  threshold: 5,
  check(value){
    if (value > this.threshold) {
      this.display("Value is too high!");
    }
  },
  display(message) {
    console.log(message);
  }
};
monitor.check(7); // The value of `this` is implied by the method call syntax.
// const badCheck = 

