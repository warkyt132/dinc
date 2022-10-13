function prinArr(pol){
   
//    return per;
//}
//module.exports  = prinArr
/*const pol= {"umd": {
    "umdRmdRows":null,
    "umdBmdRows":[
        {
            "idRad":12345678,
            "dorPrip":24,
            "depoPrip":25
        }
    ]
    ,
    "umdVmdRows":9,
    "umdKmdRows":null
    },
    "opr":{
        "idDis":6423,
        "idDorRasch":8,
        "idDorMar":{
            "256":47,
            "0":0
        }
    }
    }
    */
    newobj = camelCaseKeysToUnderscore(pol);

    function camelCaseKeysToUnderscore(pol){
        if (typeof(pol) != "object") return pol;
    
        for(var oldName in pol){
    
            // Camel to underscore
            newName = oldName.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
    
            // Only process if names are different
            if (newName != oldName) {
                // Check for the old property name to avoid a ReferenceError in strict mode.
                if (pol.hasOwnProperty(oldName)) {
                    pol[newName] = pol[oldName];
                    delete pol[oldName];
                }
            }
    
            // Recursion
            if (typeof(pol[newName]) == "object") {
                pol[newName] = camelCaseKeysToUnderscore(pol[newName]);
            }
    
        }
        return pol;
    }
    return newobj;
    }
    module.exports  = prinArr