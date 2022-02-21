const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-links');
const menuLength= menuItem.length;
const links= document.querySelectorAll(".links");

for(let i=0;i<menuLength;i++){
    if(menuItem.href === `#currentLocation`){
       links[i].className = "active links";
    }
}


var btnContainer= document.getElementById("side-nav");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("links");

// Loop through the buttons and add the active class to the         current/clicked button
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace("active", "");
this.className += " active";
});
} 