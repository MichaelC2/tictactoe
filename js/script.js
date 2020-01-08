let Currentletter = "O" 
function getTile() {
    return "<h4>" + Currentletter + "</h4>"
}
function toggleLetter() {
    if (Currentletter === "O") {
        Currentletter = "X"
    }
    if (Currentletter === "X") {
        Currentletter = "O"
    }
}

var gameTerminated = false;
var player = "O";



function performLogict(button, title){
    if(!gameTerminated){
        $(button).hide()
        $(title).html(player)
        changePlayer();
        checkHorizon();
        checkVertical();
        checkDiagnal();
        tieGame();
    }        
}

$("#button1").click(function() {
   $("#button1").replaceWith(getTile())
   toggleLetter()
});

$("#button2").click(function() {
  $("#button2").replaceWith(getTile())
  toggleLetter()
});

$("#button3").click(function() {
    $("#button3").replaceWith(getTile())
    toggleLetter()
});

$("#button4").click(function() {
 $("#button4").replaceWith(getTile())
 toggleLetter()
});

$("#button5").click(function() {
   $("#button5").replaceWith(getTile())
   toggleLetter()
});

$("#button6").click(function() {
   $("#button6").replaceWith(getTile())
   toggleLetter()
});

$("#button7").click(function() {
    $("#button7").replaceWith(getTile())
    toggleLetter()
});

$("#button8").click(function() {
   $("#button8").replacetWith(getTile())
    toggleLetter()
});
``
$("#button9").click(function() {
    $("#button9").replaceWith(getTile())
    toggleLetter()
});

