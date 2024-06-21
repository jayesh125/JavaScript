let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random() * 100) + 1;

console.log(answer);

let numGuesses = 0;

btn.addEventListener('click', () => {
    guessesNumber();
});

function guessesNumber() {
    let inputValue = parseInt(input.value, 10);
    if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    } else {
        wrng.innerHTML = ""; // Clear the warning message if input is valid
        numGuesses++;
        guesses.innerHTML = `No of Guesses: ${numGuesses}`;
        if (input.value > answer) {
            wrng.innerHTML = "Too High";
        } else if (input.value < answer) {
            wrng.innerHTML = "Too Low";
        } else{
            wrng.innerHTML = "You got it!";
            input.value = '';
            numGuesses = 0;
            btn.disabled = true;
            serTimwout(()=>{
                resetGame();
            },5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guesses.innerHTML = `No of Guesses: 0`;
}
