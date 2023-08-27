// Unique values with set data structure

function unique(str) {
  const tempStr = new Set();

  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false;
    }

    tempStr.add(letter);
  }
  return true;
}

unique("abcd");
unique("abcdeabc");
