const express = require('express')
const {GetData,addDonar} = require('../controller/DonarController')
const router = express.Router()

router.get('/get-detail',GetData)
router.post('/add-donar',addDonar)

module.exports = router