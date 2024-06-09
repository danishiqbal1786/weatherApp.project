let randomnumber=parseInt(Math.random()*100 + 1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrhi');
const startOver=document.querySelector('.resultparas');

const p=document.createElement('p');

let prevguess=[];
let numberguess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
       const guess=parseInt(userinput.value)
       console.log(guess);
       validateguess(guess)
    });
}

function validateguess(guess){
     if(isNaN(guess)){
        alert('please enter a valid number');
     }
     else if(guess<1){
        alert('please enter more than 1');
     }
     else if(guess>100){
        alert('please enter a number less than 100');
     }
     else{
        prevguess.push(guess);
        if(numberguess===11){
            displayguess(guess);
            displaymessage(`Game over. random number was ${randomnumber}`);
            endgame();

        }
        else{
            displayguess(guess);
            checkguess(guess)
        }
     }

}
function checkguess(guess){
      if(guess===randomnumber){
           displaymessage(`you guessed it right`);
           endgame();
      }
      else if(guess<randomnumber){
        displaymessage(`Number is Toooo low`);
      }
      else if(guess>randomnumber){
        displaymessage(`Number is Toooo high`);
      }
}

function displayguess(guess){
      userinput.value=''   // clean up
      guessSlot.innerHTML+=`${guess}, `;
      numberguess++;
      remaining.innerHTML=`${11-numberguess}`;

}

function displaymessage(message){
         loworhi.innerHTML=`<h2>${message}</h2>`
}

function newgame(){
    const newgamebutton= document.querySelector('#newgame');
    newgamebutton.addEventListener('click' , function(e){
        randomnumber=parseInt(Math.random()*100 + 1);
        prevguess=[];
        newgame=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numberguess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}

function endgame(){
      userinput.value='';
      userinput.setAttribute('disabled' , '');
      p.classList.add('button');
      p.innerHTML=`<h2 id="newgame">Start new Game</h2>`;
      startOver.appendChild(p);
      playGame=false;
      newgame();
}