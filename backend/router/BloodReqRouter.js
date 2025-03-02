const express = require('express')
const router = express.Router()
const {GetData,addBloodReq} = require('../controller/BloodReqController')
router.post('/add-blood-request',addBloodReq)

module.exports = router