var fs = require('fs');
const LOG_DIR = '/var/log/';
const MDS_DIR = 'kurento-media-server/';


function getFileName(type,time,filename){
    switch (type) {
        case 'MDS':
            return LOG_DIR+MDS_DIR+filename;
        default:
            console.error(`mapTypeDir :can't find ${type}`);
    }
}


 const getLogFileContent = (option,callback)=> {
     const {type,time,filename} = option;
     console.log(`getLogFileContent param = ${type} ${time}`);
      const fileName =    getFileName(type,time,filename);
      console.log(`getLogFileContent fileName = ${fileName}`);
    // 异步读取
    fs.readFile(fileName, callback);
}

const getMDSFileNames = (params)=>{
        const time = params.time;
        let findFiles = require('file-regex');
        let pattern = time;
        const dir = LOG_DIR + MDS_DIR;
        return findFiles(dir, pattern);

    }



const logFileMange = {
    getContent:getLogFileContent,
    getMDSFileNames,
}


module.exports=logFileMange;
