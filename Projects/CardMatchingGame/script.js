document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('#time');
    const scoreElement = document.querySelector('#score');
    const startButton = document.querySelector('#start-button');
    const cardsContainer = document.querySelector('.cards');
    let cardsArray = [];
    let firstCard, secondCard;
    let hasFlippedCard = false;
    let lockBoard = false;
    let score = 0;
    let time = 0;
    let timer;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createArray() {
        for (let i = 1; i < 3; i++) {
            cardsArray.push(i);
            cardsArray.push(i);
        }
    }

    function createCards() {
        createArray();
        shuffle(cardsArray);
        cardsContainer.innerHTML = '';
        cardsArray.forEach(num => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<div class="inner">
                                <div class="front">?</div>
                                <div class="back">${num}</div>
                              </div>`;
            card.addEventListener('click', flipCard);
            cardsContainer.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.querySelector('.back').textContent === secondCard.querySelector('.back').textContent;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
        score++;
        scoreElement.textContent = score;

        // reset the board
        if (score === cardsArray.length / 2) {
            setTimeout(() => {
                alert('You have matched all the cards');
                resetGame();
            }, 500);
        }
    }

    function resetGame() {
        score = 0;
        scoreElement.textContent = score;
        time = 0;
        timeElement.textContent = time;
        
        cardsContainer.innerHTML = '';
        
        clearInterval(timer);
        
        startButton.style.display = 'block';
        startButton.style = 'center';

    }    

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function startGame() {
        score = 0;
        time = 0;
        scoreElement.textContent = score;
        timeElement.textContent = time;
        createCards();
        document.querySelector('.result-details').style.display = 'block';

        timer = setInterval(() => {
            time++;
            timeElement.textContent = time;
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        startGame();
    });
});
