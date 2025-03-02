const BloodReqModel = require('../models/BloodRequestModel')
const GetData = (req,res)=>{
    return res.status(200).json({ ok: "working" });
}
const addBloodReq = async(req,res)=>{
    try {
        const newBloodReq = new BloodReqModel(req.body)
        await newBloodReq.save();
        res.status(201).json({ message: "BloodReq added successfully!", newBloodReq: newBloodReq });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {GetData,addBloodReq}