// ===== Writing ===== Writing ===== Writing =====


// Import the built-in File System (fs) module
const fs = require('fs');


//  writing a file

fs.writeFile('data.txt', 'Hello world', function(err) {
    if(err) throw err ;
    console.log('file written')
})





// Append "New Content" with a newline to 'data.txt' file
fs.appendFile('data.txt', 'New Content \r\n', function (err) {
    
    // Check for any errors during the file append operation
    if (err) throw err;
    
    // Log a success message when content is successfully added
    console.log('Content added to file');
});




// Define the content to be added to the file
const content = "dinamic content";

// Append the content to 'data.txt', followed by a newline character
fs.appendFile('data.txt', `${content}\r\n`, function (err) {
    
    // If an error occurs, throw it
    if (err) throw err;
    
    // Log success message when content is added
    console.log('Content added to file dynamically');
});


// ===== Reading ===== Reading ===== Reading =====

// Read the contents of 'data.txt' with UTF-8 encoding
fs.readFile('data.txt', 'utf8', function(err, data) {
    
    // If an error occurs, throw it
    if (err) throw err;
    
    // Log the file content to the console
    console.log(data);
});
