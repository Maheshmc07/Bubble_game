
function getbubbles(){
let helper="";
 let rand;
for(let i=1;i<170-25-18;i++){
  rand=Math.floor(Math.random()*10);
    helper=helper+ `<div class="temp">${rand}</div>`
}
document.querySelector(".bottom").innerHTML=helper;}
let timer=60;
let timerint=setInterval(function(){
  if(timer>0){
    timer--;
  document.querySelector("#timer").textContent=timer;}
  else{
    clearInterval(timerint);
    document.querySelector(".bottom").innerHTML="<h1 >GAME OVER</h1>";
  }
},1000)
let hitval;
 function gethit(){
 hitval=Math.floor(Math.random()*10);
  document.querySelector("#out").textContent=hitval;

}


gethit();

getbubbles();

timerint();
