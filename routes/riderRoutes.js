const express = require('express')
const router = express.Router()
const { getAllRiders, getRiderById } = require('../controllers/riderController')

// GET /api/riders
router.get('/', getAllRiders)

// GET /api/riders/:id
router.get('/:id', getRiderById)

module.exports = router
