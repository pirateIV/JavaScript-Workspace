const person = {
  name: ["Kate", "Smith"],
  age: 32,
  gender: "female",
  interests: ["music", "skiing"],
  bio() {
    console.log(
      `${this.name[0]} ${this.name[1]} is ${this.age} years old. She likes ${this.interests[0]} and ${this.interests[1]}.`
    );
  },
  greeting() {
    console.log(
      `Hi my name is ${this.name[0]}`
    )
  }
}

const personDataName = 'height'
const personDataVal = '1.75m'

person[personDataName] = personDataVal
console.log(person)
person.greeting()
person.bio()

function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last': last,
  };
  this.age = age;
  this.gender = genderp
  this.interests = interests;
  this.bio = function () {

    let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old'

    let pronoun

    // Check the value the gender is, and set pronoun
    // to an appropriate value in each case

    if (this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M') {
      pronoun = 'He likes'
    } else if (this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'F' ||
      this.gender === 'M') {
      pronoun = 'She likes'
    } else {
      pronoun = 'They like'
    }

    string  += pronoun
    return string
  }
}

// function messageReceived(message, timeReceived) {
//   // Ignore all message which aren't from know customers:
//   if (!message.sender && customers.getId(message.name) === null {
//       log('spam received -- ignoring')
//       return;
//     })

//     // Provide an auto-reply when outside businesss hours
//     if ((timeReceived.getHours() > 17) ||
//       (timeReceived.getHours() < 8) ||
//       (timeReceived.getDay() == Days.SUNDAY)) {
//       return autoReplyTo(message)
//     }

//   pingAgentFor(message)
// }

// // Solution 

// // Apply the decompose conditional refactoring so that the complex conditional is encapsulated in a seperate function with a good name that captures the business rule
// function messageReceived(message, timeReceived) {
//   if(!fromKnownCustomer(message)){
//     log('spam received -- ignoring')
//     return;
//   }

//   if(outsideBusinessHours(timeReceived)) {
//     return autoReplyTo(message)
//   }
// }

// ```javascript
function messageReceived(message, timeReceived) {
   // Ignore all messages which aren't from known customers:
   if (!message.sender &&
       customers.getId(message.name) == null) {
     log('spam received -- ignoring');
     return;
   }

  // Provide an auto-reply when outside business hours:
  if ((timeReceived.getHours() > 17) ||
      (timeReceived.getHours() < 8 ||
      (timeReceived.getDay() == Days.SUNDAY))) {
    return autoReplyTo(message);
  }

  pingAgentFor(message);
}

function messageReceived(message, timeReceived) {
  if (!fromKnownCustomer(message)) {
    log('spam received -- ignoring');
    return;
  }

 if (outsideBusinessHours(timeReceived)) {
   return autoReplyTo(message);
 }

 pingAgentFor(message);
}