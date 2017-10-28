
var templateStringPartOne = "<div class = 'second-text'><h1 class = 'text-center'> ";

var templateStringPartTwo = "</h1><table class = 'text-center center'><tr class = 'readBackground' id = 'cSharpImage'><td height='250' width = '350'><a href =  "


var templateStringPartTwoCloser = "> <image class = 'portfolioIcon' src= ";

var templateStringPartThree = "</td></tr></table></div>";


var tableSizeString = "</td><td height='250' width = '550'>"; 
var languageTitles = ["Unity Game Development With C#", "Java Development with Eclipse IDE", "Corona SDK Mobile Game Development With LUA", "Web Development With HTML, CSS, Javascript (etc...)"];
var languageGifs = ["http://i.imgur.com/8w1KozU.gif ", "http://i.imgur.com/H73nz9v.gif", "http://i.imgur.com/944VuXd.gif", "http://i.imgur.com/30Axq5U.gif"];
var githubLinks = ["https://github.com/DanielLopezCS/Unity-Game-Development-C-","https://github.com/DanielLopezCS/JavaFX-Sound-Capture","https://github.com/DanielLopezCS/Exploring-Corona-SDK-with-LUA.","https://github.com/DanielLopezCS/Web-Development"];
var languageText = ["Recently I began experimenting with the Unity Game Development engine to try and create games with a physics engine. For my first game I decided to do something simple to test out the unit collision system and garbage collection. <br> Shoot, power up, and destroy.", "Here is the first project where I used JavaFX and the Java native sound library to create a recording software. Sound files are exported in .wav format and includes a directory button. I enjoy how much better JavaFX makes the GUI look than the standard SWING library.","Using Corona SDK with LUA is one of the fastest ways to produce a 2D game or app. I enjoyed the straightforward functionality aswell as the compatibility with both Android and iOS devices. In this game you have to pop a ball which begins a different color than the rest. Within a few seconds of it popping it will respawn at a random location and you need to pop it again. Popping balls will increase the time left. I have published this game on the Google Play Store.", "Here is one of the first projects which I used APIs and JSON tables. Using the Wikipedia API the user can search articles from Wikipedia from this website's search query.This project was done as part of the Intermediate Project Assignment from freecodecamp.com which is where I learned much of the web development I know.  "];
var websiteLinks = [];
var finalString = "";


  
var locked = false;
  
 function showTable(index){
    
    
    finalString = templateStringPartOne + languageTitles[index] + templateStringPartTwo + githubLinks[index] + templateStringPartTwoCloser + languageGifs[index] + tableSizeString + languageText[index] + templateStringPartThree;
      
    document.getElementById("tableDiv").innerHTML = finalString;
  
   
 }
  


function myFunction(){

  
  var element = document.getElementById("cSharpImage");
  element.style.opacity = .8;
  console.log("MY FUNCTIONED");
}