const {model , Schema } = require("mongoose")

const TaskSchema = new Schema(
    {
        title:{type:String , required:true},
        description:{type:String , required:true},
        iscomplete:{type:Boolean,default:false},
        // owner:{type:Schema.Types.ObjectId , required:true, ref:"user"}
    },{
        timestamps:true
    }
)

const TaskModel = model("Task", TaskSchema)

module.exports = TaskModel