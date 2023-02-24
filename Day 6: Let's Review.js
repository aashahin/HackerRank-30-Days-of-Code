function processData(input) {
  const words = input.split('\n').slice(1);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let evenLetters = '';
    let oddLetters = '';
    for (let j = 0; j < word.length; j++) {
      if (j == 0 || j % 2 == 0) {
        evenLetters += word[j];
      } else {
        oddLetters += word[j];
      }
    }
    console.log(evenLetters + ' ' + oddLetters);
  }
}