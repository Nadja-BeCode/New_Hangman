
let name = prompt("Would you like to play the Hangman game?");
//console.log(prompt);

let words = ["javascript","hangman"];
let word = words[Math.floor(Math.random()*words.length)];

let answerWord = [];
for(let i = 0; i = word.length; i++){
    answerWord[i] = "_";
}
console.log(answerWord[i]);

let guess = promt("Guess a letter");
