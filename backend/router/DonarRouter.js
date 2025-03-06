const express = require('express')
const {GetData,addDonar,NearByDonar} = require('../controller/DonarController')
const router = express.Router()

router.get('/get-detail',GetData)
router.post('/add-donar',addDonar)
router.get('/nearbydonars',NearByDonar)
// router.get('/test',Test)

module.exports = router