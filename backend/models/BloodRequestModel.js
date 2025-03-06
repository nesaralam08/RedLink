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
        required:true,
        default:null
    },
    donarID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Donater",
        required:true,
        default:null
    },
    bloodGroup:{
        type:String,
        required:true
    },
    location: {
        type: { type: String, enum: ["Point"], required: true },
        coordinates: { type: [Number], required: true },
    },
    status:{
        type:String,
        enum:["pending","sucess","failed"],
        default:"pending",
    }
},{timestamps:true})

BloodRequestSchema.index({ location: "2dsphere" }); 
module.exports = mongoose.model("BloodRequest",BloodRequestSchema);