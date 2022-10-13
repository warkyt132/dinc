function prinArr(user,pol){
    

    newobj = camelCaseKeysToUnderscore(user,pol);

    function camelCaseKeysToUnderscore(user,pol){
        if (typeof(user) != "object") return pol;
        for(let key in user){
            //console.log(pol[key])
            if(user[key]==false){
                // 
                //console.log[user[key]]            
                //
                //console.log(pol[key])
                delete pol[key]
            }
            // Recursion
            if (typeof(user[key]) == "object") {
                camelCaseKeysToUnderscore(user[key],pol[key]);
            }
        }
        return pol;
    }
 
 // console.log("pol "+ pol)
  // console.log(JSON.stringify(pol))
    return pol ;

//return per;
}
module.exports  = prinArr


