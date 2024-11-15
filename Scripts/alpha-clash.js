// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
        const playerPressed = event.key;
        if(playerPressed === 'Escape'){
            gameOver();
        }

        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
        console.log(expectedAlphabet, playerPressed)

        if(playerPressed === expectedAlphabet){
            // *Old version/junior level code:-

            // console.log('You got a point');
            // const currentScoreElement = document.getElementById('current-score');
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore = parseInt(currentScoreText);
            // const newScore = currentScore + 1;
            // currentScoreElement.innerText = newScore;

            // New version/Senior level code:-
             const element = getScoreAndLifeValueById('current-score');
             const newScore = element + 1;
             setTextElementValueById('current-score', newScore);


            removeBackgroundColorById(expectedAlphabet);
            continueGame();
            
        }else{
            console.log('You lost a point');
            // *Old version/junior level code:-

            // const currentLifeElement = document.getElementById('current-life');
            // const currentLifeText = currentLifeElement.innerText;
            // const currentLife = parseInt(currentLifeText);
            // const lifeAvailable = currentLife - 1;
            // currentLifeElement.innerText = lifeAvailable;

            // New version/Senior level code:-
            const element = getScoreAndLifeValueById('current-life');
            const newLife = element - 1;
            setTextElementValueById('current-life', newLife);

            if(newLife === 0){
                gameOver();
            }
        }
}

document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
     const alphabet = getARandomAlphabet();
     console.log(alphabet)
     const alphabets = document.getElementById('current-alphabet');
     alphabets.innerText = alphabet;

    //  set bg color in keyboard alphabet
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  const endScore = getScoreAndLifeValueById('current-score');
  setTextElementValueById('game-end-score', endScore);

  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}