require('dotenv').config()
const express = require('express')
const cors = require('cors')
const riderRoutes = require('./routes/riderRoutes')
const vendorRoutes = require('./routes/vendorRoutes')

const app = express()

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://drop-connect.vercel.app/'] // Replace with your frontend domain
        : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)
app.use(express.json())

// Routes
app.use('/api/riders', riderRoutes)
app.use('/api/vendors', vendorRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(
    `Server is running in ${
      process.env.NODE_ENV || 'development'
    } mode on port ${PORT}`
  )
})
