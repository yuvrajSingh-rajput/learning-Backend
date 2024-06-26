const fs = require ('fs');

const logReqRes = (filename) => {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()} : ${req.method} : ${req.path}\n`, (err) =>{
            next();
        });
    }
}

module.exports = {logReqRes};
