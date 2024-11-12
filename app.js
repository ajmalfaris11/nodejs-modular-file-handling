
// File reading and writing
const fs = require("fs")

//  writing a file

// fs.writeFile('data.txt', 'Hello world', function(err) {
//     if(err) throw err ;
//     console.log('file written')
// })




// Import the built-in File System (fs) module
const fs = require('fs');

// Append "New Content" with a newline to 'data.txt' file
fs.appendFile('data.txt', 'New Content \r\n', function (err) {
    
    // Check for any errors during the file append operation
    if (err) throw err;
    
    // Log a success message when content is successfully added
    console.log('Content added to file');
});

