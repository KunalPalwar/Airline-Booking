const express = require('express')
const {ServerConfig} = require('./config')
const router = express.Router();
const apiRoutes = require('./routes')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)
router.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,(err)=>{
    if(!err){
        console.log(`App is running on port ${ServerConfig.PORT}`)
        
    }else{
        console.log(`Failed to start app server.Error : ${err.message}`)
    }
})


