function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob)
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const john = new Person('John', 'Doe', '8-12-90')
const mary = new Person('Mary', 'Johnson', 'March 20 1978')

console.log(mary)