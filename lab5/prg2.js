import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'path'
const app=express()
const port=3333
const filename=fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)
app.use(express.static(path.join(dirname,"frontend")))
app.use((req,res)=>{
    res.status(404).send("NOT FOUND")
})
app.listen(port,()=>console.log("prg2 is running at",port))