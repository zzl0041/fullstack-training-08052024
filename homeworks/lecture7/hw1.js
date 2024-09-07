/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
const fs = require('fs');
const path = require('path');
const process = require('process');

const directory = process.argv[2];
let extention = process.argv[3];

if (!extention.startsWith('.')) {
  extention = `.${extention}`;
}

fs.readdir(directory, (err, files) => {
  if (err) {
    // If directory does not exist or do not have permission or not the right path.
    return console.error(`Directory can not be reach. ${err}`);
  }

  if (!files) {
    // If no file in the directory.
    return console.error('No file exists.');
  }

  filtered_Files = files.filter((value) => {
    return path.extname(value) === extention;
  });

  if (filtered_Files.length === 0) {
    // If it's an empty array
    console.log('No file has the right extention.');
  }

  filtered_Files.forEach(element => {
    console.log(element);
  });
});

