const EventEmitter= require('events')
const util=require('util')

class Loggeer {
    log=(msg)=>{
        console.log(msg)
        this.emit('some_event',{id: 1,text:'Event test text!'})
    }
}

util.inherits(Loggeer,EventEmitter)
module.exports=Loggeer