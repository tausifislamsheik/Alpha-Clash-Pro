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
function removeBackgroundColorById(elementId){
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.remove('bg-orange-500');
}

function getScoreAndLifeValueById(elementId){
    const scoreAndValueElement = document.getElementById(elementId);
    const scoreAndValueText = scoreAndValueElement.innerText;
    const scoreAndValue = parseInt(scoreAndValueText);
    return scoreAndValue;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}