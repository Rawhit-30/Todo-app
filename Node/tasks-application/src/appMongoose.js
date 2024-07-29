const {connect} = require("mongoose")

const MONGO_URL = "mongodb+srv://Test_1:root@cluster-learn0.xv2eqgl.mongodb.net"

const DB_NAME = "MernStack"

async function connectDb(){
    try{
        await connect(`${MONGO_URL}/${DB_NAME}`)
        console.log("Connected to the database")
    }catch(err){
        console.log(err)
    }
    
}
    
connectDb()