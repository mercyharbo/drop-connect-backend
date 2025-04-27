const supabase = require('../config/supabase')

// Get all riders
const getAllRiders = async (req, res) => {
  try {
    const { data, error } = await supabase.from('riders').select('*')

    if (error) throw error
    res.json(data)
  } catch (error) {
    console.error('Error fetching riders:', error)
    res.status(500).json({ message: 'Error fetching riders' })
  }
}

// Get single rider by ID
const getRiderById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('riders')
      .select('*')
      .eq('id', req.params.id)
      .single()

    if (error) throw error
    if (!data) {
      return res.status(404).json({ message: 'Rider not found' })
    }
    res.json(data)
  } catch (error) {
    console.error('Error fetching rider:', error)
    res.status(500).json({ message: 'Error fetching rider' })
  }
}

module.exports = {
  getAllRiders,
  getRiderById,
}
