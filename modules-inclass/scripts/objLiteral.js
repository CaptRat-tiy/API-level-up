var objLiteral = {
  words: ['world', 'Utah', 'class', 'learners'],
  randomWord: '',
  setRandomWord: function() {
    let random = Math.floor(Math.random() *
  this.words.length);
  this.randomWord = this.words[random];
},
  getRandomWord: function() {
    console.log(this.randomWord);
    return this.randomWord;
  }
}

// objLiteral.setRandomWord();
// objLiteral.getRandomWord();
// objLiteral.randomWord = "not in the list";
// objLiteral.getRandomWord();
