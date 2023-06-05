// Select the first element with class "item" and assign it to the variable mainFolderName
const mainFolderName = document.querySelectorAll(".item")[0];

// Create a new div element and assign it to the variable overlay
const overlay = document.createElement("div");

// Add the class "overlay" to the overlay div
overlay.classList.add("overlay");

// Create four new i elements and assign them to variables icon1, icon2, icon3, and icon4
const icon1 = document.createElement("i");
const icon2 = document.createElement("i");
const icon3 = document.createElement("i");
const icon4 = document.createElement("i");

// Add specific classes to the icons
icon1.classList.add("ri-file-add-line");
icon2.classList.add("ri-folder-add-line");
icon3.classList.add("ri-restart-line");
icon4.classList.add("ri-checkbox-indeterminate-line");

// Append the four icons as child elements to the overlay div
overlay.appendChild(icon1);
overlay.appendChild(icon2);
overlay.appendChild(icon3);
overlay.appendChild(icon4);

// Append the overlay div as a child element to the mainFolderName element
mainFolderName.appendChild(overlay);

// Add an event listener to the mainFolderName element for mouseover event
// When the mouse is over the mainFolderName element, display the overlay by setting its style.display property to "flex"
mainFolderName.addEventListener("mouseover", () => {
  overlay.style.display = "flex";
});

// Add an event listener to the mainFolderName element for mouseout event
// When the mouse is out of the mainFolderName element, hide the overlay by setting its style.display property to "none"
mainFolderName.addEventListener("mouseout", () => {
  overlay.style.display = "none";
});

// Get all elements with class "explorer" and assign them to the variable explorer
const explorer = document.getElementsByClassName("explorer");

// Get all elements with class "sideNav i" and assign them to the variable sideNavIcons
const sideNavIcons = document.querySelectorAll(".sideNav i");

// Get the element with class "sideNav" and assign it to the variable sideNav
const sideNav = document.querySelector(".sideNav");

// Get the element with class "innerdiv" and assign it to the variable innerdiv
const innerdiv = document.querySelector(".innerdiv");

// Get the element with class "editor" and assign it to the variable editor
const editor = document.querySelector(".editor");

// Add a click event listener to the sideNav element
sideNav.addEventListener("click", (e) => {
  // Change the color of all sideNavIcons to "#dadada"
  sideNavIcons.forEach((item) => {
    item.style.color = "#dadada";
    innerdiv.classList.add("hideExplorer");
  });

  // Change the color of the clicked element to "#FFF"
  console.log();
  e.target.style.color = "#FFF";

  // If the clicked element has the class "ri-file-3-line"
  if ("ri-file-3-line" === e.target.classList[0]) {
    // Toggle the class "hideExplorer" on the innerdiv element
    innerdiv.classList.toggle("hideExplorer");
  }
  
  // Output the class of the clicked element to the console
  console.log(e.target.classList[0]);
});
