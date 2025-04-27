const vendors = require('../data/vendors')

// Get all vendors
const getAllVendors = (req, res) => {
  res.json(vendors)
}

// Get single vendor by ID
const getVendorById = (req, res) => {
  const vendor = vendors.find((v) => v.id === parseInt(req.params.id))
  if (!vendor) {
    return res.status(404).json({ message: 'Vendor not found' })
  }
  res.json(vendor)
}

module.exports = {
  getAllVendors,
  getVendorById,
}
