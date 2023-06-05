const fs = require('fs');
const path = require('path');

function readDirectoryRecursively(directoryPath) {
  // Create an object to represent the current folder in the directory structure
  const folder = {
    name: path.basename(directoryPath), // Get the base name of the directory path
    contents: [], // Array to store its children (subfolders and files)
    path: directoryPath // Store the directory path itself
  };

  // Read the directory using `fs.readdirSync` with the `withFileTypes` option
  const files = fs.readdirSync(directoryPath, { withFileTypes: true });

  // Sort the files array to have directories listed first, then files
  files.sort((a, b) => {
    const aIsDir = a.isDirectory();
    const bIsDir = b.isDirectory();

    if (aIsDir && !bIsDir) {
      return -1; // a is a directory, b is a file
    } else if (!aIsDir && bIsDir) {
      return 1; // a is a file, b is a directory
    } else {
      return a.name.localeCompare(b.name); // Both are directories or both are files, sort by name
    }
  });

  // Loop through the files and subdirectories
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file.name);

    if (file.isDirectory()) {
      // If it's a subdirectory, recursively call `readDirectoryRecursively` and store the result in a subfolder object
      const subFolder = readDirectoryRecursively(filePath);
      folder.contents.push(subFolder); // Add the subfolder object to the `contents` array
    } else {
      // If it's a file, create a file object with its name and path
      const fileObject = {
        name: file.name,
        path: path.join(directoryPath, file.name)
      };
      folder.contents.push(fileObject); // Add the file object to the `contents` array
    }
  });

  return folder; // Return the folder object representing the current directory
}

module.exports = readDirectoryRecursively; // Export the function as a module



// <<<<<<<<<<<<<<<<<<<<<<-----------------PREVIOUS CODE----------------->>>>>>>>>>>>>>>>>>>

// var fs = require('fs')
// var path = require('path')

// function readDirectoryRecursively(directoryPath) {
//     //create an object to keep actual folder structure
//     const folder = {
//       name: path.basename(directoryPath),
//       contents: [],
//       path: directoryPath
//     };
//   // Read directory
//     const files = fs.readdirSync(directoryPath, { withFileTypes: true });
//   // Loop on readed data
//     files.forEach((file) => {
//       // Generating path
//       const filePath = path.join(directoryPath, file.name);
//   // if folder
//       if (file.isDirectory()) {
//         const subFolder = readDirectoryRecursively(filePath);
//         folder.contents.push(subFolder);
//       } else {
//         const fileObject = {
//           name: file.name,
//           path: path.join(directoryPath,file.name),
//         };
//         folder.contents.push(fileObject);
//       }
//     });
  
//     return folder;
//   }

//   module.exports = readDirectoryRecursively;