const express = require("express")
const {PORT} = require("./config/serverConfig.js")

const setupAndStartServer = async ()=>{
    
    const app = express()
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`)
        
    })
}

setupAndStartServer()