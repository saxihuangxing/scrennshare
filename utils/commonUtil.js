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
}

module.exports =  commonUtils;
