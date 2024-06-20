let vowels = "aeiou";

const vowelsCalculate = (str) => {
    for (let char of str) {
        
    }
}


let btnYes = document.querySelector("#btn1");

btnYes.addEventListener("click", () => {
    alert("Thank You");
});

let btnNo = document.querySelector("#btn2");
let mouseover = 0;

btnNo.addEventListener("mouseover", () => {
    if(mouseover == 0){
        mouseover = 1;
        document.getElementById("btn2").style.marginLeft = "50px";
    }else{
        mouseover = 0;
        document.getElementById("btn2").style.margin = "-50px";
    }
    console.log(mouseover);
    // document.querySelector("#btn2").style.backgroundColor = "black";
});
