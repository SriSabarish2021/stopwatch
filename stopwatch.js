const start=document.getElementById("start")
const reset=document.getElementById("reset")
const stoper=document.getElementById("stop")

const time=document.getElementById("clock")

let timer=null;
let startTime=0
let elapsedTime=0
let isRunning=false

start.addEventListener("click",()=>{
    if(!isRunning){
        startTime=Date.now();
        timer=setInterval(update,10);
        isRunning=true
    }
})


stoper.addEventListener("click",()=>{
    if(isRunning){
        clearInterval(timer)
        elapsedTime=Date.now()-startTime;
        isRunning=false
    }
})



reset.addEventListener("click",()=>{
    clearInterval(timer)
    startTime=0
    elapsedTime=0
    isRunning=false
    time.textContent=`00:00:00:00`
})


function update(){
    const currenttime = Date.now();
    elapsedTime=currenttime-startTime;
    
    let hour=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let second=Math.floor(elapsedTime/1000%60)
    let millisec=Math.floor(elapsedTime%1000/10)

    hour=String(hour).padStart(2,"0")
    minutes=String(minutes).padStart(2,"0")
    second=String(second).padStart(2,"0")
    millisec=String(millisec).padStart(2,"0")

    time.textContent=`${hour}:${minutes}:${second}:${millisec}`
}
