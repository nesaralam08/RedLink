const mongoose = require('mongoose')

const ConnectDB = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log('DB Connected'))
    .catch((e)=>console.error(e))
}

module.exports = ConnectDB