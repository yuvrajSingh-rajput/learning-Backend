const fs = require("fs");
const sync = false;

const data = `Hello world! \n`;

if(sync){
    try{
        fs.writeFileSync('example.txt', data, 'utf8');
        console.log("file has been written!");
    }catch(err){
        console.error('Error in writting file: ', err);
    }
}else {
    fs.writeFile('example.txt', data, 'utf8', (err) => {
        if(err){
            console.error("Error: ", err);
            return;
        }
        console.log("file has been written!");
    });
}