// global variables
var scaleDegrees = ["1", "b9", "2", "b3", "3", "4", "b5", "5", "#5", "6", "b7", "7", "octave", "b9", "9", "#9", "10", "11", "#11", "12", "#12", "13"];
var scaleFsharp = ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];
var scaleB = ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var scaleE = ["E", "F", "F#", "G", "G#", "A", "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
var scaleA = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#"];
var scaleD = ["D", "Eb", "E", "F", "F#", "G", "Ab", "A", "A#", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "A#", "B"];
var scaleG = ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "D#", "E", "F", "F#", "G", "Ab", "A", "A#", "B", "C", "Db", "D", "D#", "E"]; 
var scaleC = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "G#", "A", "Bb", "B", "C", "Db", "D", "D#", "E", "F", "Gb", "G", "G#", "A"];
var scaleF = ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "Gb", "G", "G#", "A", "Bb", "B", "C", "C#", "D"];
var scaleBb = ["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G"];
var scaleEb = ["Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C"];
var scaleAb = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F"];
var scaleDb = ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"];

function showChord() {  
   // sets the scale values for the users scale selection
   var scaleChoice = document.getElementById("chooseScale").value;
   switch (scaleChoice) {
      case "scaleFsharp": 
         var scale = scaleFsharp;
         break;
      case "scaleB": 
         var scale = scaleB;
         break;
      case "scaleE":
         var scale = scaleE;
         break;
      case "scaleA":
         var scale = scaleA;
         break;
      case "scaleD":
         var scale = scaleD;
         break;
      case "scaleG":
         var scale = scaleG;
         break;
      case "scaleC":
         var scale = scaleC;
         break;
      case "scaleF":
         var scale = scaleF;
         break; 
      case "scaleBb":
         var scale = scaleBb;
         break;
      case "scaleEb":
         var scale = scaleEb;
         break;
      case "scaleAb":
         var scale = scaleAb;
         break;
      case "scaleDb":
         var scale = scaleDb;
         break;
      default:
         var scale = scaleDegrees;
         break;
   }
   // outputs the notes of the selected chord    
   var chordChoice = document.getElementById("chooseChord").value;
   switch (chordChoice) {
      case "major":
         document.getElementById("showChord").innerHTML = scale[0]  + " = " + scale[0] + ", " + scale[4] + ", " + scale[7];    
         break; 
      case "m":
         document.getElementById("showChord").innerHTML = scale[0] + chordChoice + " = " + scale[0] + ", " + scale[3] + ", " + scale[7];      
         break;
      case "dim":
         document.getElementById("showChord").innerHTML = scale[0] + chordChoice + " = " + scale[0] + ", " + scale[3] + ", " + scale[6]; 
         break;
      case "+":
         document.getElementById("showChord").innerHTML = scale[0] + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[8];    
         break;
      case "2":
         document.getElementById("showChord").innerHTML = scale[0] + chordChoice + " = " + scale[0] + ", " + scale[2] + ", " + scale[4] + ", "   + scale[7];
         break;
      case "6":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[9];   
         break;
      case "M7":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[11];   
         break;
      case "7":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10];   
         break;
      case "m7":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[3] + ", " + scale[7] + ", " + scale[10];   
         break;
      case "m7b5":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[3] + ", " + scale[6] + ", " + scale[10];   
         break;
      case "dim7":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[3] + ", " + scale[6] + ", " + scale[9];   
         break;
      case "7+":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[8] + ", " + scale[10];
         break;
      case "M9":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[11] + ", " + scale[14];   
         break;
      case "9":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10] + ", " + scale[14];   
         break;
      case "7b9":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10] + ", " + scale[13];   
         break;
      case "6/9":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[9] + ", " + scale[14];   
         break;
      case "7#9":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10] + ", " + scale[15];   
         break;
      case "sus4":
         document.getElementById("showChord").innerHTML = scale[0]  + " = " + scale[0] + ", " + scale[5] + ", " + scale[7];    
         break;
      case "sus2":
         document.getElementById("showChord").innerHTML = scale[0]  + " = " + scale[0] + ", " + scale[2] + ", " + scale[7];    
         break;
      case "7sus4":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[5] + ", " + scale[7] + ", " + scale[10];   
         break;
      case "11":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10] + ", " + scale[14] + ", " + scale[17];   
         break;
      case "13":
         document.getElementById("showChord").innerHTML = scale[0]  + chordChoice + " = " + scale[0] + ", " + scale[4] + ", " + scale[7] + ", " + scale[10] + ", " + scale[14] + ", " + scale[17] + ", " + scale[21];   
         break;
      default:
         break;  
   }
}

// creates the event listeners that call the showChord function
function createEventListeners() {
   // creates an event listener for drop down menu to select a scale
   var chooseScale = document.getElementById("chooseScale");
   chooseScale.addEventListener ("change", showChord, false);
   // creates an event listener for the drop down menu to select a chord
   var chooseChord = document.getElementById("chooseChord");
   chooseChord.addEventListener ("change", showChord, false); 
}

// removes the default selections from all of my selection fields
function removeSelectionDefaults() {
  var noDefaults = document.getElementsByTagName("select");
  for (var i = 0; i < noDefaults.length; i++) {
      noDefaults[i].selectedIndex = -1;
  }
}

// runs the functions that set up the page
function setUpPage() {
   removeSelectionDefaults();
   createEventListeners();
}

// calls the setUpPage function when the page is loaded
window.addEventListener("load", setUpPage, false);
