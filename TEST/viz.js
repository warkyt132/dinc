
const dan ={
"dfd":9
}
const fil={
    "dfd":true
}

const page='JSON1'
const fun = require(`./${page}`)
console.time("dbsave");
res = fun(dan, fil)
console.timeEnd("dbsave")



