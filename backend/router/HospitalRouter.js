const express = require('express')
const {GetData,addHospital,Login} = require('../controller/HospitalController')
const router = express.Router()

router.get('/get-detail',GetData)
router.post('/register',addHospital)
router.post('/login',Login)

module.exports = router