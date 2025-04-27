require('dotenv').config()
const express = require('express')
const cors = require('cors')
const riderRoutes = require('./routes/riderRoutes')
const vendorRoutes = require('./routes/vendorRoutes')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/riders', riderRoutes)
app.use('/api/vendors', vendorRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
