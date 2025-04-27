const riders = require('../data/riders')

// Get all riders
const getAllRiders = (req, res) => {
  res.json(riders)
}

// Get single rider by ID
const getRiderById = (req, res) => {
  const rider = riders.find((r) => r.id === parseInt(req.params.id))
  if (!rider) {
    return res.status(404).json({ message: 'Rider not found' })
  }
  res.json(rider)
}

module.exports = {
  getAllRiders,
  getRiderById,
}
