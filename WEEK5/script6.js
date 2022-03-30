
function Click() {
    var element = document.getElementById('circle');
    var circleOpacity =element.style.opacity;
    element.style.opacity = circleOpacity - 0.01;
 }

 function int () {
     setInterval(Click,10);
 }
function Load() {
    var element = document.getElementById('circle');
    element.addEventListener('click', int);
    element.style.opacity = '1';
   }
   document.addEventListener('DOMContentLoaded', Load);