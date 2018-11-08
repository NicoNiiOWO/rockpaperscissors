// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var user;
var cpu;
$("#shoot").click(function(){
    user = $("#input").val();
    var number = Math.ceil(Math.random()*3);
    console.log(number)
    if(number == "1"){
        cpu = "rock";
    }else if(number == "2"){
        cpu = "paper";
    }else if(number == "3"){
        cpu = "scissors";
    }
    $("#userChoice").text(user);
    $("#computerChoice").text(cpu);
    if(user == "paper" && cpu == "rock" || user == "rock" && cpu == "scissors" || user == "scissors" && cpu == "paper"){
        $("#result").text("User wins");
    }else if(user == "paper" && cpu == "scissors" || user == "rock" && cpu == "paper" || user == "scissors" && cpu == "rock"){
        $("#result").text("CPU wins");
    }else{
        $("#result").text("Tie");
    }
})