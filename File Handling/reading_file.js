const fs = require("fs");
const sync = false;

if(sync){
    try{
        const data = fs.readFileSync("example.txt", 'utf8');
        console.log("file content: ", data);
    }catch(err){
        console.error("unable to read file: ", err);
    }
}else{
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if(err){
            console.error("unable to read file asynchronously: ", err);
            return;
        }
        console.log("file content: ", data);
    });
}