import http from 'http'

const server=http.createServer((req,res)=>{
    console.log("Welcome to Node JS")
    console.log(req.url)
    
    console.log("Get Method:")
    console.log(req.method)

    console.log("Request Header:")
    console.log(req.headers)

    console.log("Socker info")
    //console.log(req.socket)
    console.log(req.headers.host)
    res.end("hello")
})
const port=4444
server.listen(port,()=>console.log("Server is running....."))
