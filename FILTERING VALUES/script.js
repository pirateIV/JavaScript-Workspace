var str = `Since Boolean is a native javascript function/constructor that takes [one
    optional parameter] and the filter method also takes a function and passes it the current array
    item as a parameter, you could read it like the following`;

// Fitering values

function startWithLetterA(str) {
  if(str && str[0].toLowerCase() == 'a') {
    return true
  }
  return false
}

const strArr = str.split(" ")

console.log(strArr.filter(startWithLetterA))