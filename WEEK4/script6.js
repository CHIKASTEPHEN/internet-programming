function NAME() {
    var GOAT= document.getElementById('CHIKA');
    GOAT.firstChild.nodeValue ='STEPHEN000';
}
    
function UPDATEL() {
        var HOUSE= document.getElementById('LONDON');
             HOUSE.firstChild.nodeValue ='TRIDENT';
            }

    function part3() {
            var GOAT= document.getElementById('CHIKA');
                GOAT.addEventListener('mouseleave', NAME);

            var HOUSE= document.getElementById('LONDON');
             HOUSE.addEventListener('mouseenter', UPDATEL);

    }
    
    document.addEventListener('DOMContentLoaded', part3);