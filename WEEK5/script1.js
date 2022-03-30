 function clickme() {
     alert('the button was pressed')
 }

 function me() {
var H= document.getElementById('circle');
    H.addEventListener('click',clickme)
    
 }

 document.addEventListener('DOMContentLoaded',me)
