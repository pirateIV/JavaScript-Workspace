class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function () {
      var string = `${this.name.first} ${this.name.last} is ${this.age} years old.`;
      let pronoun;

      if (this.gender === 'male') {
        pronoun = 'He likes ';
      } else if (this.gender === 'female') {
        pronoun = 'She likes ';
      } else {
        pronoun = 'They like ';
      }

      // add the pronoun to the end of the main string
      string += pronoun;
      // use another condition to structure the last part of the second sentence.
      // depending whether the number of interests is 1, 2 or 3
      if (this.interests.length === 1) {
        string += `${this.interests[0]}.`;
      } else if (this.interests.length === 2) {
        string += `${this.interests[0]} and ${this.interests[1]}.`;
      } else {
        // if there are more interest we loop through them
        for (let i = 0; i < this.interests.length; i++) {
          if (i === this.interests.length - 1) {
            string += `and ${this.interests[i]}`;
          } else {
            string += `${this.interests[i]},`;
          }
        }
      }
      return string;
    };
    this.greeting = function () {
      return `Hello my name is ${this.name.first} ${this.name.last}`;
    };


  }
}

let person1 = new Person('John', 'Smith', 30, 'male', ['music', 'athletics', 'skiing'])

Person.prototype.farewell = function() {
  console.log(this.name.first + ' has left the building. Bye for now')
}
console.log(person1)
console.log(person1.bio()) 
console.log(person1.greeting())

// let string = ''
// const nums = [1, 2, 3, 4, 5, 6]
// for(let i = 0; i < nums.length; i++) {
//   if(i === nums.length - 1) {
//     string += `and ${nums[i]}.`
//   } else {
//     string += `${nums[i]}, `
//   }
// }
// console.log(string)