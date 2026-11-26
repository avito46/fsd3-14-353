import http from'http'
const server=http.createServer((req,res)=>{
   if(req.url=='/'){
        res.end("<h1>Home Page</h1>")
   }
        else if(req.url=="/about")
        {
       res.end("<h1>About us page</h1>")
        }   
       else if(req.url=='/product')
       {
        res.end(`<h1>MOBILE</h1>
    <h2>Price:</h2>
    <p>discount:5%</p>`)
        }  
    else
    {
     res.statusCode=404
     res.end(`<h1>404,Not found</h1>
        <p>Page not found</p>
        <a href='/'>Home</a>`)
     }
})
const port=4444
server.listen(port,()=>console.log("SERVER IS RUNNING......"))