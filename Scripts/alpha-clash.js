// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

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
    showElementById('play-ground');
    continueGame();
}