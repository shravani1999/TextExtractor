
const fs = require('fs');
const pdf = require('pdf-parse');

    

 

let dataBuffer = fs.readFileSync('files/Resume_1.pdf');
pdf(dataBuffer).then(function(data) {
 
    // number of pages
   // console.log(data.numpages);
    // number of rendered pages
    //console.log(data.numrender);
    // PDF info
    //console.log(data.info);
    // PDF metadata
    //console.log(data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    //console.log(data.version);
    // PDF text
    console.log(data.text); 
    fs.writeFile('files/new2.txt',data.text,function(err){
        if(err){
            return console.log(err);
        }
        console.log("saved");
    });
        
});
 
