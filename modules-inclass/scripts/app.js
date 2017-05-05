const objLiteral = require('./objLiteral-exported.js');
const revealing = require('./revealing-exported.js');
const mathy = require('./mathy.js');

console.log(mathy.add(1,2));
console.log(mathy.subtract(2,1));
console.log(mathy.cheezeyPotatoes(42,3.14));



objLiteral.setRandomWord();
objLiteral.getRandomWord();
objLiteral.randomWord = "not in the list";
objLiteral.getRandomWord();

revealing.setRandomWord();
revealing.getRandomWord();
revealing.randomWord = "this is not in the list";
revealing.getRandomWord();
