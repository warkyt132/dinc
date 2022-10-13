function prinArr(user,pol){
    

   camelCaseKeysToUnderscore(user,pol);

    function camelCaseKeysToUnderscore(user,pol){
        if (typeof(user) != "object") return pol;
        for(let key in user){
            //console.log(pol[key])
            if(user[key]==true){
                // 
                //console.log[user[key]]            
                //
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


