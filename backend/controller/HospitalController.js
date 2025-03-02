const HospitalModel = require('../models/HospitalModel')
const GetData = (req,res)=>{
    return res.status(200).json({ ok: "working" });
}
const addHospital = async(req,res)=>{
    try {
        const newhos = new HospitalModel(req.body)
        await newhos.save();
        res.status(201).json({ message: "Hospital added successfully!", hospital: newhos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {GetData,addHospital}