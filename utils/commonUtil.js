commonUtils = {
    transKBToG : (value) =>{
        var valueForG = value/1024/1024;
        return valueForG.toFixed(2) + "G";
    },

    tranObjToArr: (obj) =>{
        let res = obj;
        if(typeof(obj) == 'object') {
            if (obj.constructor != Array){
                res = [obj];
            }
        }
        return res;
    },

    getMaxValueInObjArr: (objArr,key) =>{
        if(objArr === null || objArr === undefined || objArr.constructor !== Array || objArr.length <= 0 || !(key in objArr[0])){
            return -1;
        }
        let values = objArr.map((obj)=>{
            return obj[key];
        })
        return Math.max(...values);
    },

    getMaxValueInSubArrObj: (objArr,key1,key2) =>{
        if(objArr === null || objArr === undefined || objArr.constructor !== Array || objArr.length <= 0 || !(key1 in objArr[0]) ){
            return -1;
        }

        if( objArr[0][key1].length <= 0 || !(key2 in objArr[0][key1][0])){
            return -1;
        }

        let values = objArr.map((obj)=>{
           let subObjArr =   obj[key1];
            return subObjArr[0][key2];
        })
        return Math.max(...values);
    }
    ,
    getLocalIp: () =>{
        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }

}

module.exports =  commonUtils;
