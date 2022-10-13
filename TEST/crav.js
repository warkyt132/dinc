function prinArr(dan,fil){
    let priz=1
    let rez=true
    
    if(fil.kds==dan.kds){
    camelCaseKeysToUnderscore(fil,dan);

    function camelCaseKeysToUnderscore(fil,dan){
        for(let key in fil){
            priz=1
            if(fil[key]==dan[key]){
              priz=0
            }else{
            if(typeof(fil[key])=="object"){
                const str= JSON.stringify(fil[key])
                if(str.substring(0, 1)=="{"){
                    camelCaseKeysToUnderscore(fil[key],dan[key])
                }else{
                fil[key].forEach(danpol=>{
                    if(typeof(dan[key])=="object"){
                        camelCaseKeysToUnderscore(fil[key],dan[key])
                    }
                    if(dan[key]==danpol){
                      priz=0
                    }
                  })}
            }
        }
        if(priz==1){
            return rez=false
        }
        }
    }
}else{
    return rez=false
}
return rez;
}
module.exports  = prinArr