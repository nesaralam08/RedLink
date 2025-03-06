const mongoose = require('mongoose')

const DonaterSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true,
        unique:true,
    },
    report:{
        type:String,
        default:""
    },
    hostpitalID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        default:null
    },
    requesterID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BloodRequest",
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
DonaterSchema.index({ location: "2dsphere" }); 
module.exports = mongoose.model("Donater",DonaterSchema);