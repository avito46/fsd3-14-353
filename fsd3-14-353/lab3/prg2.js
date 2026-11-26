import http from'http'

const server=http.createServer((req,res)=>
{
    /*res.writeHead(404,{
        "Content-type":"text/plain"
    })*/
    res.end("<h1>WELCOME TO SERVER SIDE</h1>")
})
const port=4444
server.listen(port,()=>console.log("IT IS RUNNING......"))