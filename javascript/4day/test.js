'use strict'
function menuon(){
  
  let $a = document.getElementById('fsmenu');
  $a.addEventListener('mouseover',$a.style.color = 'black  ');
  $a.addEventListener('mouseout',$a.style.color = 'red');
  

}

window.addEventListener("load",menuon)

