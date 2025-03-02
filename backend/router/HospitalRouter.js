const express = require('express')
const {GetData,addHospital} = require('../controller/HospitalController')
const router = express.Router()

router.get('/get-detail',GetData)
router.post('/add-hospital',addHospital)

module.exports = router