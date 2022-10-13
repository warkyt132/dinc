function prinArr(user,pol){
    let per1
    const per =JSON.stringify(pol,function replacer(key,values){ 
        //values=values.peplace
        per1=JSON.stringify(user,function replacer(keys,valuess){
          if(key==keys){
         if (valuess==false){
           if (values==null){
            values=1
           }
            if(values!=null){
                values=values.peplace
        }
         }
          }
          return valuess
           })  
    return values
})
//console.log(per)
return per;
}
module.exports  = prinArr

/*
const user=
{"umd": {
    "umdRmdRows":false,
    "umdBmdRows":[
        {
            "idRad":true,
            "dorPrip":false,
            "depoPrip":true
        },
    ],
    "umdVmdRows":false,
    "umdKmdRows":true
    },
    "opr":{
        "idDis":false,
        "idDorRasch":true,
        "idDorMar":{
            "256":false,
            "0":true
        }
    }
    }

    const pol= {"umd": {
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
       /*
        const per =JSON.stringify(pol,function replacer(key,values){ 
                //values=values.peplace
                per1=JSON.stringify(user,function replacer(keys,valuess){
                  if(key==keys){
                 if (valuess==false){
                   if (values==null){
                    values=1
                   }
                    if(values!=null){
                        values=values.peplace
                }
                 }
                  }
                  return valuess
                   })  
                   
            return values
        })
       console.log(per)
       */
    /*обоазец 2
    for(let key in user){
        //console.log(key)
        const js = user[key]
        const js1=pol[key]
        for (let keys in js){
            if(js[keys]==false){
            delete js[keys]
            delete js1[keys]
            }
    }
}



for (let kluch in user){
    const json = user[kluch]
    const json1 = pol[kluch]
    for(let keys in json){
        if(typeof json[keys]=='object'){
             let object= json[keys]
             let object1 =json1[keys]
            for(let key in object){
                const obek =object[key]
                const obek1 =object1[key]
                if(object[key]==false){
                    delete object[key]
                    delete object1[key]
                }
                for(let kl in obek){
                    
                    if(obek[kl]==false){
                        delete obek[kl]
                        delete obek1[kl]
                        
                    }
                }
            }
        }
    }
}
 
for( let key in pol){
    console.log(key)
const js = pol[key]
console.log(js)
}
    */
    //const json =JSON.stringify(user.umd.umdBmdRows[0].depoPrip)
    //console.log(json)
    //console.log(JSON.parse(json))
    //console.log(typeof user.umd.umdBmdRows[0])//определение типа
    /*
    let entries = Object.entries(user)
    entries.map(([index, item])=>{
         let keys= Object.entries(item)
          keys.map(([inde,utel])=> {
            if(utel==false){
               // console.log(inde)
            }else{
               // console.log('----------')
             let keysq= Object.entries(utel)
             keysq.map(([ind,teks])=>{
                if(teks==false){
                    //console.log(ind)
                }else{
                   // console.log('----------')
                 let keysqd= Object.entries(teks)
                 keysqd.map(([indd,teksd])=> {
                    if(teksd==false){
                        //console.log(indd)
                    }else{
                        //console.log(indd)
                    }
                 })  
                }
              })  
            }
          })
      })
      */

    //console.log(typeof user)//узнать объект

 //  console.log(user)
//полуяение ключей
 //   let keys= Object.keys(user)
 //  console.log(keys)
 //  console.log('----')
//значение объекта
//let values = Object.values(user)
//console.log(values)
//console.log('----')
//console.log(values[0])
//console.log('----')

//
//let entries = Object.entries(user)

//entries.map(([index, item])=>{
  //  let keys= Object.entries(item)
  //  keys.map(([inde,utel])=> {
   //     if(utel==false){console.log(inde)}
   // })
//})
//
//console.log('----')
//let keys= Object.keys(user)
//keys.forEach(persona => console.log(persona))


