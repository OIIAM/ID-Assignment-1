
// //Toggles between showing and hiding the dropdown menu when user clicks
// function Dropdown(){
//     document.getElementById("MenuContent").classList.toggle("show");
// }

// // Close dropdown menu when user clicks away from the menu

// window.onclick = function(event){
//     if (!event.target.matches('.dropbtn')){
//         var dropDown = document.getElementsByClassName("Menu-Content");
//         for (i=0; i < dropDown.length; i++){
//             var openDropDown = dropDown[i];
//             if (openDropDown.classList.contains('show')){
//                 openDropDown.classList.remove('show');
//             }
//         }
//     }
// }

function myFunction() {
    var x = document.getElementById("Navbar");
    if (x.className === "navbar") {
    x.className += " responsive";
    } else {
    x.className = "navbar";
    }
}