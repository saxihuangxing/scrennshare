commonUtils = {
    transKBToG : (value) =>{
        var valueForG = value/1024/1024;
        return valueForG.toFixed(2) + "G";
    }
}

module.exports =  commonUtils;
