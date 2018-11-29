// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice;
var cpuChoice;
var winner;
var wins = 0;
var losses = 0;

$("#shoot").click(function(){
    userChoice = $("#input").val();
    if(userChoice.toLowerCase() != "rock" && userChoice.toLowerCase() != "paper" && userChoice.toLowerCase() != "scissors"){
        $("#result").text("Invalid input");
    }else{
        var number = Math.ceil(Math.random()*3);
        console.log(number);
        if(number == "1"){
            cpuChoice = "rock";
        }else if(number == "2"){
            cpuChoice = "paper";
        }else if(number == "3"){
            cpuChoice = "scissors";
        }
        $("#userChoice").text(userChoice);
        $("#computerChoice").text(cpuChoice);
        
        userChoice = userChoice.toLowerCase();
        if(userChoice == "paper" && cpuChoice == "rock" || userChoice == "rock" && cpuChoice == "scissors" || userChoice == "scissors" && cpuChoice == "paper"){
            $("#result").text("User wins");
            winner = "user";
            wins++;
            $("#wins").text("Wins: " + wins);
        }else if(userChoice == "paper" && cpuChoice == "scissors" || userChoice == "rock" && cpuChoice == "paper" || userChoice == "scissors" && cpuChoice == "rock"){
            $("#result").text("CPU wins");
            winner = "cpu";
            losses++;
            $("#losses").text("Losses: " + losses);
        }else{
            $("#result").text("Tie");
            winner = "";
        }
        $("#input").val("");
    }
})