let Currentletter = "X" 

function getTile() {
    return  Currentletter
}

function toggleLetter() {
    if (Currentletter === "X") {
        Currentletter = "B"
    } else {
        Currentletter = "X"
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

function winner(indexA, indexB, indexC) {
  valA =  $(indexA).val()
  valB = $(indexB).val()
  valC = $(indexC).val()


 if (valA === Currentletter && valB === Currentletter && valC === Currentletter) {
     return true 
 }
 else {
     return false
 }

}

function checkVertical() {
  let resultA = winner("#button2", "#button5",  "#button8")
  let resultB = winner("#button1", "#button4", "#button7")
  let resultC = winner("#button3", "#button6", "#button9")
  if (resultA == true || resultB == true || resultC == true){
  return true
}
else {
    return false
}
}

function checkHorizontal() {
    let resultA 
}