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
    }

}

module.exports =  commonUtils;
