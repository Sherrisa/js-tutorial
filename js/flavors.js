function iceCreamMessage() {
     var flavorChoice = document.getElementById("chooseFlavor").value;
     switch (flavorChoice) {
        case "lavender":
           document.getElementById("showMessage").innerHTML = 
           "Love that lavender!";
           break;
        case "lemonSorbet":
           document.getElementById("showMessage").innerHTML = 
           "When life gives you lemons, make lemon sorbet!";
           break;
        case "saltedCaramel":
           document.getElementById("showMessage").innerHTML = 
           "Try an affogato shot with this one!";
           break;   
        default:
           document.getElementById("showMessage").innerHTML = " ";
           break;
     }
   }
   
function removeSelectionDefaults() {
  var noDefaults = document.getElementsByTagName("select");
  for (var i = 0; i < noDefaults.length; i++) {
      noDefaults[i].selectedIndex = -1;
  }
}

function createEventListeners() {
     var chooseFlavor = document.getElementById("chooseFlavor");
     chooseFlavor.addEventListener ("change", iceCreamMessage, false);
}
  

window.addEventListener("load", createEventListeners, false);
window.addEventListener("load", removeSelectionDefaults, false);