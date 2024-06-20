let logDiv = document.getElementById("log");
let stateDiv = document.getElementById("state");

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

// Start Button adding keyup and keydown eventlistner and function
startBtn.addEventListener("click", ()=>{
    document.addEventListener("keyup", handleUp);
    document.addEventListener("keydown", handleDown);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

// Stop Button adding keyup and keydown eventlistner and function
stopBtn.addEventListener("click", ()=>{
    document.removeEventListener("keyup", handleUp);
    document.removeEventListener("keydown", handleDown);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function handleUp(e) {
    logDiv.textContent = `key ${e.key} pressed up`;
    stateDiv.textContent = "Key is Up"
}

function handleDown(e) {
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent = "Key is down"
}