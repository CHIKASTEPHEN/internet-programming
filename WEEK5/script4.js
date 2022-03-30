
    function clickme() {
        var ele= document.getElementById('circle');
        ele.style.opacity='0.5';
    }
 
function load() {
    var kl=document.getElementById('circle');
    kl.addEventListener('click',clickme);
    k1.style.opacity='1';



}
document.addEventListener('DOMContentLoaded',load);
