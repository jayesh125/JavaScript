const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    // Random paragraph list
    const paragraph = [
        "The sun set over the horizon, casting a golden hue across the landscape.",
        "In the quiet village, the sound of children's laughter filled the air.",
        "A gentle breeze rustled the leaves, whispering secrets of the past.",
        "The old library stood at the town's center, a beacon of knowledge and history.",
        "Birds chirped merrily in the trees, their songs a symphony of nature.",
        "The aroma of freshly baked bread wafted through the streets, inviting everyone to the bakery.",
        "Under the starry night sky, the town seemed to glow with a magical light.",
        "The river flowed calmly, reflecting the beauty of the surrounding scenery.",
        "People gathered in the town square, sharing stories and enjoying the evening.",
        "As the night grew darker, the village lights twinkled like a million fireflies."
    ];
    
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML = '';
    for(const char of paragraph[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',(e) => {
        console.log(e); 
        input.focus()
    });
    typingText.addEventListener("click",() =>{
        input.focus();
    });
}

// Handle user input events
function initTyping(){
    const char = typingText.querySelectorAll("span");
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0) {

        if(!isTyping){
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }

        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log("correct");
        }else{
            mistake++;
            char[charIndex].classList.add('incorrect');
            console.log("Incorrect");
        }
        charIndex++;
        char[charIndex].classList.add('active');
        mistakes.innerText = mistake;

        cpm.innerText = charIndex - mistake;
    }else{
        clearInterval(timer);
        input.value = '';
    }
}

function initTime(){
    if(timeLeft > 0){
        timeLeft--;
        time.innerText = timeLeft;

        const wpm = Math.round(((charIndex - mistake)/5)* (maxTime - timeLeft) *60);
        wpm.innerText = wpm;
    }else{
        clearInterval(timer);
        
    }

}

function reset(){
    charIndex = 0;
    mistake = 0;
    timeLeft = maxTime;
    time.innerText = timeLeft;
    mistakes.innerText = mistake;
    wpm.innerText = 0;
    cpm.innerText = 0;
    typingText.innerHTML = '';
    loadParagraph();
    input.value = '';
    isTyping = false;
    clearInterval(timer);
}
loadParagraph();

input.addEventListener("input", initTyping);
document.addEventListener('DOMContentLoaded', loadParagraph);
btn.addEventListener('click', reset);
