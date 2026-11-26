function sayHello(name)
{
    console.log(`Hello ${name}`)
}
const sayHi=(name)=> {
    console.log(`Hello ${name}`) //or we could write console.log("Hello", "Avi")
}
const findSum=(a,b)=> {  //curly braces use kiya to return likhna padega
    return a+b
}
const sum=(a,b)=>a+b
 sayHello("Anuj Sharma")
 sayHi("Avi")
 console.log("Sum=",findSum(5,6))
 console.log("Sum=",sum(6,6))