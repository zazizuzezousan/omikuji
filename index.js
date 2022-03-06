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
        stopSound.pause();
        startSound.currentTime = 0.5;
        startSound.play();
        startSound.loop = true;
        roulette = setInterval(function(){
            startStop.innerText = "停止";
            showDisplay();
            resultNumber++;
        },interval);
    }else{
        startSound.pause();
        stopSound.currentTime = 0;
        stopSound.play();
        clearInterval(roulette);
        select();
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

function select(){
    let lastResultNumber = Math.floor(Math.random()*100);
    if(lastResultNumber >= 0 && lastResultNumber <= 59){
        resultDisplay.innerText ="大吉";
    }
    if(lastResultNumber >= 60 && lastResultNumber <= 79){
        resultDisplay.innerText ="吉";
    }
    if(lastResultNumber >= 80 && lastResultNumber <= 89){
        resultDisplay.innerText ="中吉";
    }
    if(lastResultNumber >= 90 && lastResultNumber <= 94){
        resultDisplay.innerText ="小吉";
    }
    if(lastResultNumber >= 95 && lastResultNumber <= 99){
        resultDisplay.innerText ="末吉";
    }
    if(lastResultNumber == 100){
        resultDisplay.innerText ="凶";
    }
}