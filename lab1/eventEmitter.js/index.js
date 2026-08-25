/*EVENT EMITTER*/ 
import {EventEmitter} from 'node:events'

const sayHi=(name)=>{
    console.log(`${name} logged in`)
}

const task=new EventEmitter()

task.on("greet",sayHi) //greet is a keyword

task.on("greet",(name)=>{
    console.log(`${name} starts working`)
})

// FIX: store the exit handler in a variable so we have a stable reference
const exitHandler = (name) => {
    console.log(`${name} starts working`)
}

task.on("exit", exitHandler)

task.on("greet",(name)=>{
    console.log(`${name} logged out`)
})

task.once("greet",(name)=>{
    console.log(`${name} is still working`)
})

// FIX: pass the SAME reference here, not a new anonymous function
task.off("exit", exitHandler)

task.emit("greet","Rahul Singh")
task.emit("greet","Kevin")
task.emit("exit","Manager")   // won't fire — listener was actually removed now
task.emit("exit","Bob")       // won't fire either — still removed
//also study task.removeAllListners and task.listenerCount("greet")