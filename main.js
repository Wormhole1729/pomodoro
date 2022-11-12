
//timer button variables
let start =document.getElementById('start');
let done1=document.getElementById('done1');
let reset  =document.getElementById('reset');


//timer minutes second and break minute seconds variables
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let bmin = document.getElementById('bmin');
let bsec = document.getElementById('bsec');


//
function timer(){
  //Work Timer Countdown
  if(seconds.innerText != 0){
      if(seconds.innertext<10){
        let wsec= seconds.innerHTML-1;
        let wstr = wsec.toString();
        seconds.innerHTML = string.concat('0',wstr);
    } 
      else{
        seconds.innerText--;
      }
  } else if(minutes.innerText != 0 && seconds.innerText == 0){
      seconds.innerText = 59;
      minutes.innerText--;
  }

  //Break Timer Countdown
  if(minutes.innerText == 0 && seconds.innerText == 0 && bmin.innerText == 0 && bsec.innerText == 0){
    minutes.innerText = 25;
    seconds.innerText = "00";

    bmin.innerText = 5;
    bsec.innerText = "00";

    document.getElementById('counter').innerText++;
  }
}


//control variable for starting the timer
let startTimer;


//start button functionality
start.addEventListener('click', function(){

    //starting the timer from 25 mins
    if(startTimer == undefined){
      
      start.innerText = "Pause";
      startTimer = setInterval(timer, 1000)
        
    }
   
    //stopping the timer when pause is clicked
    else if(startTimer !=undefined && start.innerText=="Pause"){
        stopTimer();
        startTimer = undefined;
        start.innerText ="Resume";
    }
    //resuming the timer
    else if(startTimer == undefined && start.innerText=="Resume"){
      
        startTimer = setInterval(timer,1000);
    }
    
  })


//reset button function  
reset.addEventListener('click', function(){
    stopTimer();                                  //u have to stop the timer first otherwise the function gets called faster
    seconds.innerText = "00";
    minutes.innerText = 25;
    startTimer = undefined;
    start.innerText = "Start";
    bsec.innerText = "00";
    bmin.innerText = "05";
  
 }) 

 
//done button function 
done1.addEventListener('click',function(){
  stopTimer();
  seconds.innerText = "00";
  minutes.innerText = 25;
  start.innerText = "Start";
  bsec.innerText = "00";
  bmin.innerText = "05";
  startTimer = undefined;
  alert('Great job,you should take a break')
} )
   
        

 
//timer function
 function timer(){
    //Work Timer Countdown
  if(seconds.innerText != 0){
    if(seconds.innertext<10){
      let wsec= seconds.innerHTML-1;
      let wstr = wsec.toString();
      seconds.innerHTML = string.concat('0',wstr);
} 
  
else{
  seconds.innerText--;
  }} else if(minutes.innerText != 0 && seconds.innerText == 0){
      seconds.innerText = 59;
      minutes.innerText--;
  }

  //Break Timer Countdown
  if(minutes.innerText == 0 && seconds.innerText == 0 && bmin.innerText == 0 && bsec.innerText == 0){
    minutes.innerText = 25;
    seconds.innerText = "00";
  
    bmin.innerText = 5;
    bsec.innerText = "00";
  
    document.getElementById('counter').innerText++;
  }
   
}


//stopping the timer for pausing and reset condition and done status
function stopTimer(){
clearInterval(startTimer);
}



/**----------------------------------------------------------------Adding the task list------------------------------------------------------------------------------ */



 
//variables 
let ul = document.getElementById('list');
let removeAll = document.getElementById('removeAll');
let add = document.getElementById('add');

//add button using onclick()
add.onclick = () => {
  addLi(ul);
  
};


//add into list functionality
function addLi(LiUl) {
  let inputText = document.getElementById('text').value;
  let list = document.createElement('li');
  let textNode = document.createTextNode(inputText + ' ');
  let removeButton = document.createElement('button');
  document.getElementById('text').value = '';

  if (inputText.split(' ').join('').length === 0) {
    alert('no input');
    return false;
  }

  removeButton.className = 'removeMe';
  removeButton.innerHTML = '✔️';
  removeButton.setAttribute('onclick', 'removeMe(this);'); 

  list.appendChild(textNode);
  list.appendChild(removeButton);

  LiUl.appendChild(list);
}


//removing an item
function removeMe(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}


//remove all button function
removeAll.onclick = function() {
  ul.innerHTML = '';
};



