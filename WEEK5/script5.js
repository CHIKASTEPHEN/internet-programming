
function Click() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity + 0.1;
   }
   function Load() {
    var element = document.getElementById('circle');
    element.addEventListener('click', Click);
    element.style.opacity = '0.5';
   }
   document.addEventListener('DOMContentLoaded', Load);