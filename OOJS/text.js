const test = {
  prop: 42,
  func: function() {
    return this.prop
  },
}
console.log(test.func())

function getThis() {
  return this;
}

const obj1 = { name: "obj1" }
const obj2 = { name: "obj2" }

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj1.getThis());

const obj3 = {
  __proto__: obj1,
  name: "obj3",
};
console.log(obj3.getThis())

const obj4 = {
  name: "obj4", 
  getThis() {
    return this;
  },
}

const obj5 = {name: "obj5"}
obj5.getThis = getThis;
console.log(obj5.getThis())

// Description
// The value of __this depends on which context it appears: function, class, or global

// Function context
// inside a function, the value of this depends on how the function is called think about __this as a hidden parameter of a function

const globalObject = this
const foo = () => this

// console.log(foo() === globalObject)
console.log(foo() === globalObject)
// const