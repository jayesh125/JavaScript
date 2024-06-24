let boxes = document.querySelectorAll('.box');
let clicks = false;
let count = 0;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (count < 9) {
            if (!box.classList.contains('clicked')) {
                if (clicks === false) {
                    clicks = true;
                    box.style.backgroundColor = "red";
                    box.innerHTML = "O";
                } else {
                    clicks = false;
                    box.style.backgroundColor = "blue";
                    box.innerHTML = "X";
                }
                count++;
                box.classList.add('clicked');
                
                if (checkWinner()) {
                    setTimeout(() => {
                        alert(`Player ${clicks ? 2 : 1} Wins!`);
                        resetGame();
                    }, 100);
                } else if (count === 9) {
                    setTimeout(() => {
                        alert("It's a Tie!");
                        resetGame();
                    }, 100);
                }
            }
        }
    });
});

function checkWinner() {
    const winPatterns = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern.map(id => document.getElementById(id).innerHTML);
        return a !== "" && a === b && a === c;
    });
}

function resetGame() {
    count = 0;
    boxes.forEach(box => {
        box.classList.remove('clicked');
        box.style.backgroundColor = "white";
        box.innerHTML = ""; // Clear the content of the box
    });
    clicks = false; // Reset clicks to false
}
