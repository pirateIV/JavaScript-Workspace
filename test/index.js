// const obj = {
//   name: 'Jean-Luc Picard',
//   rank: 'Captain'
// };

// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key])
// })

const Singleton = (function () {
  let instance;

  function createInstance() {
    // Private constructor function to create the Singleton instance
    const object = new Object();
    object.message = "This is a Singleton instance.";
    console.log(object)

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage:
const singletonInstance1 = Singleton.getInstance();
console.log(singletonInstance1.message); // Output: This is a Singleton instance.

const singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance1 === singletonInstance2); // Output: true (both refer to the same instance)



// const Singleton = (funtion() {
//   let instance;

//   function createInstance() {
//     // Private constructor function to create a Singleton instance
//     const object = new Object();
//     object.message = "This is singleton instance"

//     return object
//   }

//   return {
//     getInstance: function() {
//       if(!instance) {
//         instance = createInstance()
//       }
//       return instance
//     }
//   }
// })();

// // Usage:
// const singletonInstance1 = Singleton.getInstance();
// console.log(singletonInstance1.message)