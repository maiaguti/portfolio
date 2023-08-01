"use strict";

function myFunction() { // displays the vases section of the shop on page load 
    displayItem(event, 'earthHands');
};

function displayItem(evt, itemName) { // function that loops through the shop section to display one item/section at a time
    var i, portfolioItems, item;
    portfolioItems = document.getElementsByClassName("portfolioItems"); // loops through the sections 
    for (i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].style.display = "none";
    }
    item = document.getElementsByClassName("item"); // loops through the buttons display
    for (i = 0; i < item.length; i++) {
        item[i].className = item[i].className.replace("active", "");
    }
    document.getElementById(itemName).style.display = "grid"; // displays the sections as a grid
    evt.currentTarget.className += " active";

    // closeNav();  // closes side panel when someone selects a project to view
}

// the following are event listeners for the function above specifically regarding the buttons, so that when a certain button is clicked, the correspond section appears
let earthBtn = document.getElementById("earthButton");
earthBtn.addEventListener("click", function(){
    displayItem(event, 'earthHands');
});

let aliveBtn = document.getElementById("aliveButton");
aliveBtn.addEventListener("click", function(){
    displayItem(event, 'alive');
});

let gemaBtn = document.getElementById("gemaButton");
gemaBtn.addEventListener("click", function(){
    displayItem(event, 'gemaRedesign');
});

let cswBtn = document.getElementById("cswButton");
cswBtn.addEventListener("click", function(){
    displayItem(event, 'csWebsite');
});

let catalystBtn = document.getElementById("catalystButton");
catalystBtn.addEventListener("click", function(){
    displayItem(event, 'catalystBrief');
});

let endlessBtn = document.getElementById("endlessButton");
endlessBtn.addEventListener("click", function(){
    displayItem(event, 'endlessSummer');
});
// end of those event listeners



// Portfolio Side Panel functions inspired by https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp 
/* Set the width of the sidebar to 200px (show it) */
// function openNav() {
//     document.getElementById("mySidepanel").style.width = "200px";
//   }
  
  /* Set the width of the sidebar to 0 (hide it) */
//   function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
//   } 
// end of collapseable Side Panel functions

