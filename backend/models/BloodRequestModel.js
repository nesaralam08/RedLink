const mongoose = require('mongoose')

const BloodRequestSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true,
        unique:true,
    },
    hostpitalID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        require:true
    },
    bloodGroup:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","sucess","failed"],
        default:"pending",
    }
},{timestamps:true})

module.exports = mongoose.model("BloodRequest",BloodRequestSchema);