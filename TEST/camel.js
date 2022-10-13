function prinArr(pol){
   
    newobj = camelCaseKeysToUnderscore(pol);

    function camelCaseKeysToUnderscore(pol){
        if (typeof(pol) != "object") return pol;
    
        for(var oldName in pol){
    
            // underscore to Camel
            newName = oldName.replace(/_([a-z])/g, function($1){return $1[1].toUpperCase();});

    
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