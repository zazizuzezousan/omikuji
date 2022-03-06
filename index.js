const resultDisplay = document.getElementById("result");
const startStop = document.getElementById("startstop");
const startSound = document.getElementById("start");
const stopSound = document.getElementById("stop");
let resultNumber = 0;
let interval = 50;
let buttonStatus = true;
let roulette;

startStop.addEventListener("click",function(){
    if(buttonStatus){
        buttonStatus = false;
        startSound.play();
        startSound.loop = true;
        roulette = setInterval(function(){
            startStop.innerText = "停止";
            showDisplay();
            resultNumber++;
        },interval);
    }else{
        startSound.pause();
        stopSound.play();
        clearInterval(roulette);
        resultDisplay.innerText = "大吉";
        startStop.innerText = "開始";
        buttonStatus = true;
    }
});

function showDisplay(){
    if(resultNumber == 0){
        resultDisplay.innerText ="大吉";
    }
    if(resultNumber == 1){
        resultDisplay.innerText ="吉";
    }
    if(resultNumber == 2){
        resultDisplay.innerText ="中吉";
    }
    if(resultNumber == 3){
        resultDisplay.innerText ="小吉";
    }
    if(resultNumber == 4){
        resultDisplay.innerText ="末吉";
    }
    if(resultNumber == 5){
        resultDisplay.innerText ="凶";
        resultNumber = -1;
    }
}