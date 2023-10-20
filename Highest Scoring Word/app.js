// Solution 1
function highestScoringWord(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Map the array of words to an array of scores
  const scores = words.map((word) =>
    // Reduce the word to a single score
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    )
  );

  // Find the highest score and index
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  // Return the word with the highest score
  return words[highestIndex];
}

console.log(highestScoringWord("Hello my name is xavier"));
