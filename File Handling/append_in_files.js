const fs = require("fs");
const sync = false;

const data = `My name is Yuvraj Singh \n`;

if(sync){
    try{
        fs.appendFileSync('example.txt', data, 'utf8');
        console.log("data appended successfully!");
    }catch(err){
        console.error("Error: ", err);
    }
}else{
    fs.appendFile('example.txt', data, 'utf8', (err) => {
        if(err){
            console.error('Error: ', err);
            return;
        }
        console.log("data appended successfully!");
    });
}