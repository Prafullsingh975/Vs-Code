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

// Toggle Explorer onClick
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

// Toggle Explorer on ctrl + B
const iconExplorer = document.querySelector(".ri-file-3-line");
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.keyCode === 66) {
      e.preventDefault();
      innerdiv.classList.toggle("hideExplorer");
      if (innerdiv.classList.contains('hideExplorer')) {
        iconExplorer.style.color = "#dadada";
        innerdiv.style.width = "calc(100% + 27rem)";
      } else {
        // Change the color of the clicked element to "#FFF"
        iconExplorer.style.color = "#FFF";
        innerdiv.style.width = "100%";
      }
    }
  });

//pop up menu for creating files and folder
const contentMenu = document.querySelector(".contentMenu");
const fileContentMenu = document.querySelector(".fileContentMenu");
const menu = document.querySelectorAll(".item");
const createFile = document.querySelectorAll("#createFile");
const createFolder = document.querySelectorAll("#createFolder");

const onOff = () => {
  document.querySelectorAll(".items form").forEach((elm) => {
    elm.style.display = "none";
  });
};
const offContextMenu = () => {
  contentMenu.style.display = "none";
  fileContentMenu.style.display = "none";
};
menu.forEach((m, index) => {
  m.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    offContextMenu();
    if (m.parentElement.className === "folder") {
      contentMenu.style.display = "initial";
      contentMenu.style.top = `${e.y - 30}px`;
      contentMenu.style.left = `${e.x - 30}px`;

      //Show createFile and createFolder form

      contentMenu.addEventListener("click", (e) => {
        
        onOff();

        switch (e.target.innerText) {
          case "New File...":
            createFile[index].style.display = "initial";
            createFile[index].childNodes[1].focus();
            break;
          case "New Folder...":
            createFolder[index].style.display = "initial";
            createFolder[index].childNodes[1].focus();
            break;
          case "Delete":
            const deleteFolder = document.getElementById("delete");
            deleteFolder.href = "deleteFolder/" + menu[index].title;
            break;

          default:
            break;
        }
      });
    } 
    else {
      fileContentMenu.style.display = "initial";
      fileContentMenu.style.top = `${e.y - 30}px`;
      fileContentMenu.style.left = `${e.x - 30}px`;
    }

    //Delete File
    fileContentMenu.addEventListener("click",(e)=>{
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "Delete":
                const deleteFile = document.querySelector(".fileContentMenu #deleteFile");
                deleteFile.href = "deleteFile/" + menu[index].title;
                break;
        
            default:
                break;
        }
      })


  });
  // Off form if user press Esc key
  window.addEventListener("keydown", (detail) => {
    if (detail.keyCode === 27) {
      onOff();
      document.querySelectorAll(".forms input").forEach(elm=>elm.value="");
    }
  });
  window.addEventListener("click", () => {
    contentMenu.style.display = "none";
    fileContentMenu.style.display = "none";
  });
});

// Collapse all folders
const items = document.querySelectorAll(".items");
const collapsedIcon = document.querySelectorAll(".collapsedIcon");
const collapseAll = ()=>{
    items.forEach((items)=>{
        items.style.display="none"
    });
    collapsedIcon.forEach(elm=>{
        elm.classList.add('ri-arrow-right-s-line');
        elm.classList.remove("ri-arrow-down-s-line");
    })
}
collapseAll();
icon4.addEventListener('click',()=>{
    collapseAll();
})

// OnClick folder collapse

collapsedIcon.forEach((elm,index)=>{
    elm.addEventListener("click",(it)=>{
        if (it.target.classList.contains('ri-arrow-right-s-line')) {
            items[index].style.display = "flex";
            collapsedIcon[index].classList.remove('ri-arrow-right-s-line');
            collapsedIcon[index].classList.add("ri-arrow-down-s-line");  
        }
        else{
            items[index].style.display = "none";
        collapsedIcon[index].classList.add('ri-arrow-right-s-line');
        collapsedIcon[index].classList.remove("ri-arrow-down-s-line");
        }
    })
})


// Save data 
document.addEventListener("keydown", function(event) {
    // Check if Ctrl + S was pressed
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); // Prevent the default browser save action
      // Get the form element
      var form = document.getElementById("saveData");
      if (form) {
        form.submit(); // Submit the form
      }
    }
  });
  

