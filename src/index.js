
const express = require('express')
const router = express.Router();
const apiRoutes = require('./routes')

const app = express();

router.use('/api',apiRoutes)
app.use(router)

app.listen(50098,(err)=>{
    if(!err){
        console.log(`App is running on port 8080`)
    }else{
        console.log(err.message)
    }
})


