const express = require('express')
const {GetData,addHospital,Login,NearbyHospitals} = require('../controller/HospitalController')
const router = express.Router()

router.get('/get-detail',GetData)
router.post('/register',addHospital)
router.post('/login',Login)
router.get('/nearby-hospitals',NearbyHospitals)

module.exports = router