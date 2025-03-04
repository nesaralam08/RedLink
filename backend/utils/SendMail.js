const nodemailer = require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.EMAIL_PASS
    }
})

const SendMail = async(to,subject,text)=>{
    try {
        const mailOptions = {
            from:process.env.USER_EMAIL,
            to,
            subject,
            text
        }
        await transporter.sendMail(mailOptions)
        console.log("Email sent successfully!")
    } catch (error) {
        console.log("Error Sending Email",error)
    }
}

module.exports = SendMail