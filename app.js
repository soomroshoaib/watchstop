var min = 0;
var sec = 0;
var mil = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milHeading = document.getElementById("mil");

var interval;

function time(){
    mil++
    milHeading.innerHTML = mil;
    if(mil >= 100){
        sec++
        secHeading.innerHTML = sec 
        mil = 0;
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min
        sec = 0; 
    }

}

function start(){
    interval = setInterval(time,10)
}


function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    mil = 0;
    milHeading.innerHTML = min
    secHeading.innerHTML = sec
    milHeading.innerHTML = mil
    stop()
}