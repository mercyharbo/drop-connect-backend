# Drop Connect Backend

A simple Node.js + Express backend API for managing riders and vendors.

## Features

- REST API endpoints for riders and vendors
- CORS enabled
- Simple error handling
- Static data storage (in-memory)

## API Endpoints

### Riders

- `GET /api/riders` - Get all riders
- `GET /api/riders/:id` - Get single rider details

### Vendors

- `GET /api/vendors` - Get all vendors
- `GET /api/vendors/:id` - Get single vendor details

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server will run on http://localhost:3000
