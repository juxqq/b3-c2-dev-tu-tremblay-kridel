var clicked = false;

$(document).ready(function(){
    $('.chiffre').click(function() {
        if (clicked) {
            $('#toto')[0].innerHTML = "";
            clicked = false;
        }
        $('#toto')[0].innerHTML += this.innerHTML;
    });
    $('.operande').click(function() {
        if (clicked) {
            $('#toto')[0].innerHTML = "";
            clicked = false;
        } 
        if (this.innerHTML === '%') {
            $('#toto')[0].innerHTML += '/100*';
        } else if (this.innerHTML === '√') {
            $('#toto')[0].innerHTML += '**(1/2)';
            $('#toto')[0].innerHTML = eval($('#toto')[0].innerHTML);
        } else {
            $('#toto')[0].innerHTML += this.innerHTML;
        }
    });
    $('#AC').click(function(){
        $('#toto')[0].innerHTML = "";
        clicked = false;
    });
    $('#resultat').click(function(){
        try {
            $('#toto')[0].innerHTML = eval($('#toto')[0].innerHTML);
        } catch (error) {
            $('#toto')[0].innerHTML = "Error";
            clicked = true;
        }
    });
});