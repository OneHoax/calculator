/*
Author: Carlos Osorio
Student #: 211 841 558
Course: EECS 3461 F 2019
Assignment: 1
*/

// Global variables
var isOn = false;
var opOn = false;
var operand1 = 0;
var operand2 = 0;
var operator = "";

// All functions, except for onOff(), only apply if calculator is on;
// isOn = true.

// displays content of button being pressed if it's a number or period;
// if some operation button (+, -, *, /) has been pressed then replace screen content with next button pressed;
// else if screen only has a "0" and next button pressed is a "." then append the ".",
//      else next button pressed is not a "." then replace content of screen (allows for "0.1..");
// else screen's content is not just a "0" then append next content.
function display(button) {
    var y = document.getElementById("display");
    var x = document.getElementById(button.id).innerHTML;
    if (isOn) {
       if (opOn) {
           y.innerHTML = x;
           opOn = false;
       } else if (y.innerHTML == "0") {
           if (x == ".") {
               y.innerHTML += x;
           } else {
               y.innerHTML = x;
           }
       } else {
           y.innerHTML += x;
       }
    }
}

// replace contents of the screen with a "0".
function clearScreen() {
    if (isOn)
        document.getElementById("display").innerHTML = "0";
}

// if screen is empty then display a "0" and change state to on;
// is screen is not empty then erase all screen content and change state to off.
function onOff() {
    var y = document.getElementById("display");
    var x = y.innerHTML;
    if (x == "") {
        y.innerHTML = "0";
        isOn = true;
    } else {
        y.innerHTML = "";
        isOn = false;
    }
}

// for operations +, -, *, and /; sets operand1 to the contents of the screen
// and operator to the next button being pressed (+, -, *, or /).
function operation(op) {
    opOn = true;
    if (isOn) {
        var y = document.getElementById("display");
        operand1 = y.innerHTML;
        if (!(op.innerHTML == "="))
            operator = op.innerHTML;
        // y.innerHTML = "";
    }
}

// for operations +, - *, and /; sets operand2 to the contents of the screen
// converts operand1 and operand2 to numbers and replaces contents of the screen
// with operation "operand1 operator operand2"; also resets the contents of these
// variables.
function compute() {
    if (isOn) {
        var y = document.getElementById("display");
        operand2 = y.innerHTML;
        var op1Num = Number(operand1);
        var op2Num = Number(operand2);
        if (!(operator == "")) {
            if (operator == "+") {
                y.innerHTML = op1Num + op2Num;
            } else if (operator == "-") {
                y.innerHTML = op1Num - op2Num;
            } else if (operator == "x") {
                y.innerHTML = op1Num * op2Num;
            } else {
                y.innerHTML = op1Num / op2Num;
            }
        }
        operand1 = "";
        operand2 = "";
        operator = "";
    }
}

// applies the sin operation to content of the screen and replaces
// this content with the result
function sineOf() {
    if (isOn) {
        var y = document.getElementById("display");
        var x = y.innerHTML;
        y.innerHTML = Math.sin(x);
    }
}

// applies the sqrt operation to content of the screen and replaces
// this content with the result
function sqrtRootOf() {
    if (isOn) {
        var y = document.getElementById("display");
        var x = y.innerHTML;
        y.innerHTML = Math.sqrt(x);
    }
}
