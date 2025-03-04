const HospitalModel = require('../models/HospitalModel')
const bcrypt = require('bcryptjs')
const SendEmail = require('../utils/SendMail')
const jwt = require('jsonwebtoken')
const GetData = (req,res)=>{
    return res.status(200).json({ ok: "working" });
}
const addHospital = async(req,res)=>{
    try {
        
        const {name,email,password,contact,address,location} = req.body
        let isExist = await HospitalModel.findOne({ email });
        if (isExist) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newhos = new HospitalModel({name,email,password:hashedPassword,contact,address,location})
        await newhos.save();
        await SendEmail(email, "Welcome to RedLink!", `Hello ${name},\n\nWelcome to our website! We’re glad to have you here.\n\nRegards,\nRedLink Team\n\nDeveloped By : Nesar Alam`);
        res.status(201).json({ message: "Hospital added successfully!", hospital: newhos });
    } catch (error) {
        res.status(500).json({ error: error.message, name:"Nesar Alam" });
    }
}

const Login = async(req,res)=>{
    try {
        const {email,password} = req.body
        // console.log(email,password)
        let isExist = await HospitalModel.findOne({ email });
        if (!isExist) return res.status(400).json({ message: "User already exists" });
         
        const isMatch = await bcrypt.compare(password, isExist.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
        
        const token = jwt.sign({ id: isExist._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, hospitalData: { id: isExist._id, name: isExist.name, email: isExist.email } });

    } catch (error) {
        res.status(500).json({ error: error.message ,alam:"Nesar Alam"});
    }
}

module.exports = {GetData,addHospital,Login}