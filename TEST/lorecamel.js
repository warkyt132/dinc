function prinArr(pol){
   
    camelCaseKeysToUnderscore(pol);

   function camelCaseKeysToUnderscore(pol){
       if (typeof(pol) != "object") return pol;
   
       for(var i in pol){
   
           var a = pol[i];
           for (var key in a) {
               if (a.hasOwnProperty(key)) {
                 a[key.charAt(0).toUpperCase() + key.substring(1)] = a[key];
                 if(key.replace(/\s/g, '').length === 0 || isNaN(key)){
                    delete a[key]
                 }
                 //delete a[key];
                 
               }
           }
           pol[i] = a;
       
   
           // Recursion
           if (typeof(pol[i]) == "object") {
               pol[i] = camelCaseKeysToUnderscore(pol[i]);
           }
   
       }
       return pol;
   }
   camelCaseKeysToUnderscor(pol);

   function camelCaseKeysToUnderscor(pol){
       if (typeof(pol) != "object") return pol;
   
       
   
          
           for (var key in pol) {
               if (pol.hasOwnProperty(key)) {
                 pol[key.charAt(0).toUpperCase() + key.substring(1)] = pol[key];
                 if(key.replace(/\s/g, '').length === 0 || isNaN(key)){
                    delete pol[key]
                 }
                 
                 
               }
           }

       return pol;
   }
   return pol;
   }
   module.exports  = prinArr