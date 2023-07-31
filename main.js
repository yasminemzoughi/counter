//declaration
var counter=document.getElementById("counter");
var plus=document.querySelector(".incr");
var minus= document.querySelector(".decr")
//initialisation
var count=0;
//incrrementation
plus.addEventListener("click",function(){
    count++;
    counter.innerHTML=count;
})
//decrementation
minus.addEventListener("click",function(){
    count--;
    counter.innerHTML=count;
})