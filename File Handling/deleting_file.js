const fs = require("fs");
const sync = false;

if(sync){
    try{
        fs.unlinkSync('example.txt');
        console.log("file deleted successfully!");
    }catch(err){
        console.error("Error: ", err);
    }
}else{
    fs.unlink('example.txt', (err)=>{
        if(err){
            console.error("Error: ", err);
            return;
        }
        console.log("file deleted successfully!");
    })
}