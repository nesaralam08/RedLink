const mongoose = require('mongoose')

const HospitalSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    },
    location: {
        type: { type: String, enum: ["Point"], required: true },
        coordinates: { type: [Number], required: true },
    },
    bloodAvailability: {
        A_positive: { type: Number, default: 0 },
        A_negative: { type: Number, default: 0 },
        B_positive: { type: Number, default: 0 },
        B_negative: { type: Number, default: 0 },
        O_positive: { type: Number, default: 0 },
        O_negative: { type: Number, default: 0 },
        AB_positive: { type: Number, default: 0 },
        AB_negative: { type: Number, default: 0 },
    },
    status:{
        type:String,
        required:true,
        enum:["verified","not verified","pending"],
        default:"pending"
    }
},{timestamps:true})
HospitalSchema.index({ location: "2dsphere" }); 

module.exports = mongoose.model('Hospital',HospitalSchema);