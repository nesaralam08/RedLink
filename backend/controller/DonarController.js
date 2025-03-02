const DonarModel = require('../models/DonaterModel')
const GetData = (req,res)=>{
    return res.status(200).json({ ok: "working" });
}
const addDonar = async(req,res)=>{
    try {
        const newDonar = new DonarModel(req.body)
        await newDonar.save();
        res.status(201).json({ message: "Donar added successfully!", Donar: newDonar });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {GetData,addDonar}