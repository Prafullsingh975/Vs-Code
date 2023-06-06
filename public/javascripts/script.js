// Select the first element with class "item" and assign it to the variable mainFolderName
const mainFolderName = document.querySelectorAll(".item")[0];

//Set Title of main folder
mainFolderName.title = mainFolderName.textContent;

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

// Add title attribute
icon1.title = "New File...";
icon2.title = "New Folder...";
icon3.title = "Refresh Explorer";
icon4.title = "Collapse Folders in Explorer";

// Append the four icons as child elements to the overlay div
overlay.appendChild(icon1);
overlay.appendChild(icon2);
overlay.appendChild(icon3);
overlay.appendChild(icon4);

// Append the overlay div as a child element to the mainFolderName element
mainFolderName.appendChild(overlay);

// When the mouse is over the mainFolderName element, display the overlay by setting its style.display property to "flex"
mainFolderName.addEventListener("mouseover", () => {
  overlay.style.display = "flex";
});

// When the mouse is out of the mainFolderName element, hide the overlay by setting its style.display property to "none"
mainFolderName.addEventListener("mouseout", () => {
  overlay.style.display = "none";
});

const explorer = document.getElementsByClassName("explorer");
const sideNavIcons = document.querySelectorAll(".sideNav i");
const sideNav = document.querySelector(".sideNav");
const innerdiv = document.querySelector(".innerdiv");
const editor = document.querySelector(".editor");

sideNav.addEventListener("click", (e) => {
  if (e.target.classList[0] === "ri-file-3-line") {
    sideNavIcons.forEach((item) => {
      item.style.color = "#dadada";
    });
    innerdiv.classList.toggle("hideExplorer");
    if (innerdiv.classList[1]) {
      e.target.style.color = "#dadada";
      innerdiv.style.width = "calc(100% + 27rem)";
    } else {
      // Change the color of the clicked element to "#FFF"
      e.target.style.color = "#FFF";
      innerdiv.style.width = "100%";
    }
  } else {
    // Change the color of all sideNavIcons to "#dadada"
    sideNavIcons.forEach((item) => {
      item.style.color = "#dadada";
      innerdiv.classList.add("hideExplorer");
      innerdiv.style.width = "calc(100% + 27rem)";
    });
    e.target.style.color = "#fff";
  }
});

//pop up menu for creating files and folder
const contentMenu = document.querySelector(".contentMenu");
const menu = document.querySelectorAll(".item");

menu.forEach((m) => {
  if (m.parentElement.className === "folder") {
    m.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      contentMenu.style.display = "initial";
      contentMenu.style.top = `${e.y - 30}px`;
      contentMenu.style.left = `${e.x - 30}px`;
    });
    window.addEventListener("click", () => {
      contentMenu.style.display = "none";
    });
  }
});

//Show createFile and createFolder form
const createFile = document.querySelector("#createFile")
const createFolder = document.querySelector("#createFolder")

const onOff = () => {
    document.querySelectorAll(".items form").forEach((elm) => {
      elm.style.display = "none"
    })
  }

contentMenu.addEventListener('click',(e)=>{
    console.log(createFile);
    onOff();
    console.log(e.target.innerText);
    switch (e.target.innerText) {
        case "New File...":createFile.style.display = "initial"
            break;
        case "New Folder...":createFolder.style.display = "initial"
            break;
    
        default:
            break;
    }
});

// Off form if user press Esc key
window.addEventListener("keydown", (detail) => {
    if(detail.keyCode === 27){
      onOff();
      document.querySelectorAll("input").forEach((elm) => {
      elm.value = "";
    })
    }
  })

// window.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.keyCode === 66) {
//     innerdiv.classList.toggle("hideExplorer");
//     if (innerdiv.classList[1]) {
//       e.target.style.color = "#dadada";
//       innerdiv.style.width = "calc(100% + 27rem)";
//     } else {
//       // Change the color of the clicked element to "#FFF"
//       e.target.style.color = "#FFF";
//       editor.style.width = "calc(100% - 27rem)";
//     }
//   }
// });
