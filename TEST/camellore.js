function prinArr(pol){
   
    const camelize = require('camelize2')
    const camelizedResponse = camelize(pol)
    return camelizedResponse;
    }
    module.exports  = prinArr