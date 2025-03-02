const mongoose = require('mongoose')

const DonaterSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true,
        min:[15,"Age must be above 15"],
    },
    contact:{
        type:String,
        require:true,
        unique:true,
    },
    report:{
        type:String,
        default:""
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

module.exports = mongoose.model("Donater",DonaterSchema);