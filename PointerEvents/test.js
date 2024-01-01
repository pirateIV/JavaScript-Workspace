let random = '';

for (let i = 1; i < 10; i++) {
  random += Math.floor(Math.random() * 10);
}

// document.getElementById('display').textContent = 'Hello world'
// document.getElementById('display').textContent = random;

let randomScore = random.split('')

let newRandomScoreArr = randomScore.map(score => {
  return parseFloat(score)
})
console.log(randomScore)
console.log(eval(newRandomScoreArr.join('+'))) 