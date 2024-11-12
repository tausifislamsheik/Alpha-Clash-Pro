function hideElementById(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId){
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden')
}

function setBackgroundColorById(elementId){
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.add('bg-orange-500');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}