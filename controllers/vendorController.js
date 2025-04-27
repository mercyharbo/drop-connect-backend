const supabase = require('../config/supabase')

// Get all vendors
const getAllVendors = async (req, res) => {
  try {
    const { data, error } = await supabase.from('vendors').select('*')

    if (error) throw error
    res.json(data)
  } catch (error) {
    console.error('Error fetching vendors:', error)
    res.status(500).json({ message: 'Error fetching vendors' })
  }
}

// Get single vendor by ID
const getVendorById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('vendors')
      .select('*')
      .eq('id', req.params.id)
      .single()

    if (error) throw error
    if (!data) {
      return res.status(404).json({ message: 'Vendor not found' })
    }
    res.json(data)
  } catch (error) {
    console.error('Error fetching vendor:', error)
    res.status(500).json({ message: 'Error fetching vendor' })
  }
}

module.exports = {
  getAllVendors,
  getVendorById,
}
