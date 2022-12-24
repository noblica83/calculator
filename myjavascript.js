function clearScreen (){
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;

}
window.onload = function () {
    // -- function calling and stuff:
    // for blocking alphabets into input field and helping calculation through keyboard keys
    document.onkeypress = keyboardInput;

    // for deleting value using backspace
    document.onkeydown = backspaceKeyEvent;

}


