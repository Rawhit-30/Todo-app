// const http = require("http")

// const server = http.createServer((req , res)=>{
//     res.write("Welcome to server created by Rohit ")
//     res.end()
// })

// server.listen(8080 , ()=>{
//     console.log("Server is up and Running")
// })


require("./appMongoose")
const express = require("express")
const task = require("../models/task")

const app = express()

app.use(express.json()) 

app.get("/" , (req , res)=>{
    res.send("Welcome to the server created by Rohit")
})

app.get("/add" , (req , res) =>{
    let {a:FirstNumber,b:SecondNumber} = req.query
    let sum = parseInt(FirstNumber) + parseInt(SecondNumber) 
    res.send({sum})
})

// adding new task
app.post("/add-task" , async (req,res) =>{
    const Task = new task({title:"Test task " , description:"Test task desc"})
    await Task.save() 
    return res.status(201).send({message:"Task added"})
})

// get all the task

app.get("/get-task" , async (req,res) =>{
    const tasklist = await task.find()
    return res.status(200).send(tasklist)
})


// update task

app.put("/update-task/:taskId" , async (req , res) =>{
    const {taskId} = req.params
    const updateResult = await task.updateOne({ _id : taskId} , {$set : {...req.body}})
    if(!updateResult.matchedCount){
        return res.status(404).send({message: `Task id ${taskId} was not Found`})
    }
    return res.status(200).send({message:"Update success"})

})


// delete task

app.delete("/delete-task/:taskId" , async (req, res) =>{
    const {taskId} = req.params
    const deleteResult = await task.deleteOne({
        _id : taskId
    })
    if(!deleteResult.deletedCount){
        return res.status(404).send({message : `Task id ${taskId} not found`})
    }
    return res.status(200).send({message:"Delete Success"})
})

app.listen(8080 , ()=>{
    console.log("server is up and Running")
})