function updateParagraph() {
    var element = document.getElementById('HELLO WORLD');
    element.firstChild.nodeValue = 'faith';
   }
   function updateH1() {
    var element = document.getElementById('myheading');
    element.firstChild.nodeValue = 'chika stepehen';
   }
   function myLoadFunction() {
    var element = document.getElementById('myheading');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('HELLO WORLD');
    element.addEventListener('click', updateParagraph);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);