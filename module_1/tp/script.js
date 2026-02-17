import { dico } from './dico.js';

const randomWord = getRandomWord();
let nbAttempt = 5;
console.log(randomWord);
let hiddenWord = [];

function generateAlphabet(){
  for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
    //création des caractères
    let letter = String.fromCharCode(i)

    //création du bouton
    const button = document.createElement('button')
    button.innerText = letter

    //ajout du click sur le bouton
    button.addEventListener('click', checkLetter)

    //ajout dans le dom
    document.getElementById('alphabet').append(button)
  }
}

function getRandomWord(){
  const index  = Math.round(Math.random() * dico.length);
  return dico[index];
}

function displayRandomWord(){

  // for (const char of randomWord) {
  //   // if(char === '-' || char === "'"){
  //   //   hiddenWord.push(char)
  //   // }else{
  //   //   hiddenWord.push('_')
  //   // }
  //
  //   if(!char.match(/[A-Z]/)){
  //     hiddenWord.push(char)
  //   }else{
  //     hiddenWord.push('_')
  //   }
  // }
  document.getElementById('wordToFind').innerText = randomWord.replace(/\w/gi, '_')
}

function checkLetter(){
  // randomWord[3] = 'A'//impossible
  // console.log(randomWord[3]);
  const letter = this.innerText
  let randomDomWord = document.getElementById('wordToFind').innerText.split('')

  if(randomWord.includes(letter)){
    for(const [index, char] of randomWord.split('').entries()){
      if(char === letter){
        randomDomWord[index] = letter
      }
    }
    document.getElementById('wordToFind').innerText = randomDomWord.join('')
  }else{
    document.getElementById('nbAttempt').innerText = --nbAttempt;
  }
  checkWin()
}

function checkWin(){

  if(!document.getElementById('wordToFind').innerText.includes('_') && nbAttempt > 0){
    alert("T'es un champion, champion !")
  }

  if(nbAttempt === 0){
    alert("Rejoue !")
  }

}


window.onload = function(){
  displayRandomWord()
  generateAlphabet()
  document.getElementById('reset').addEventListener('click', function(){
    window.location.reload()
  })
}


