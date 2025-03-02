require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const HospitalRouter = require('./router/HospitalRouter')
const DonarRouter = require('./router/DonarRouter')
const BloodReqRouter = require('./router/BloodReqRouter')
const PORT = process.env.PORT || 8000
const ConnectDB = require('./database/ConnectDB')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.json())
ConnectDB('mongodb://localhost:27017/redlink')

app.use('/api/hospital',HospitalRouter)
app.use('/api/donate',DonarRouter)
app.use('/api/bloodrequest',BloodReqRouter)


app.listen(PORT,()=>console.log(`Server is running AT: ${PORT}`))
