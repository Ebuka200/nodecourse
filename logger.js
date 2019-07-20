const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

const createLoggerFolder = () => {
    //Create Folder
    fs.mkdir(path.join(__dirname, '/logger'), {}, err => {
             if(err) throw err;
             console.log('Folder Created...');
         });     
}

const createLogContent = (msg) => {
    fs.appendFile(path.join(__dirname, '/logger', 'logger.txt'),
        (msg), err => {
             if (err) throw err;
             console.log("File written to...");
         });
}

class Logger extends EventEmitter{
    log(msg){
        this.emit('message', { id: uuid.v4(), msg});
        // createLoggerFolder();
        // console.log("New Content", {id: uuid.v4(), msg})
        createLogContent(`id: ${uuid.v4()}, Message : ${msg}`+ '\n');
    }
}

module.exports = Logger;