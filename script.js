const strtButton = document.getElementById("srtQuiz");
const stopBtn = document.getElementById('stop');
const h1El = document.getElementsByTagName('h1');

let x = 0;
let y = 0;
let w = 0;

function stop(){
    clearInterval(timerStart);
}
function timerStart(){
    const setTime = 1000;
    myVar = setInterval(alertFunc, setTime);
    console.log(setTime); 
    console.log("button clicked");
}

function alertFunc(){
    x++;
  h1El[0].textContent = w +':' + y + x;
 
  if(x === 9){
      x = 0;
      y++;
  }
  if(y===5 && x ===9){
      w++;
  }
}

strtButton.addEventListener('click', timerStart);
stopBtn.addEventListener('click',stop);