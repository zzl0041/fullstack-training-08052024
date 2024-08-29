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
const { log } = require('console');
const fs = require('fs');
const path = require('path');

// async
const printFiles = (dirname, ext) => {
    if (!fs.existsSync(dirname)) {
        log('Directory does not exist!');
        return;
    }
    ext = '.' + ext;
    fs.readdir(dirname, (err, files) => {
        if (err) {
            log(err.message);
            return;
        }
        let filesSelected = files.filter(file => path.extname(file) === ext);
        filesSelected.forEach(file => log(file));
    });
}

// directly print current working directory on terminal
// printFiles(__dirname, "js");

// command line
const dirname = process.argv[2];
const ext = process.argv[3];
if (dirname && ext) {
    printFiles(dirname, ext);
} else {
    console.log("Please provide a directory name and file extension.");
    console.log("e.g. node hw1.js . txt");
}