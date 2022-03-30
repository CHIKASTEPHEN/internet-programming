 function blue (){
var background=document.getElementById('circle');
    background.style.background='blue'


 }
 
 function me() {
var H= document.getElementById('circle');
    H.addEventListener('click',blue)
    }
document.addEventListener('DOMContentLoaded',me)
