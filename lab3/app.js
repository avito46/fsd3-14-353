import http from 'http'

/*const server=http.createServer()
server.on('request',(req,res)=>{
    res.write("<h1>Welcome to server side programming</h1>")
    res.write("Nodemon is tracking files")
    res.end()
})*/

const server=http.createServer((req,res)=>{
    res.end("<h1>Welcome to server side</h1>")
})

server.listen(5000,()=>{
    console.log("Server is running")
})