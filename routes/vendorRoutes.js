const express = require('express')
const router = express.Router()
const {
  getAllVendors,
  getVendorById,
} = require('../controllers/vendorController')

// GET /api/vendors
router.get('/', getAllVendors)

// GET /api/vendors/:id
router.get('/:id', getVendorById)

module.exports = router
