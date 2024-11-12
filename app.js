
// File reading and writing
const fs = require("fs")

//  writing a file

fs.writeFile('data.txt', 'Hello world', function(err) {
    if(err) throw err ;
    console.log('file written')
})