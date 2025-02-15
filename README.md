# XCord Project

[![CI/CD Pipeline](https://github.com/inkbytefo/11/actions/workflows/ci.yml/badge.svg)](https://github.com/inkbytefo/11/actions/workflows/ci.yml)

## Project Structure

```
xcord/
├── frontend/           # Frontend application
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── index.html     # Main HTML file
├── services/          # Backend services
│   ├── index.js       # Main server file
│   └── package.json   # Backend dependencies
├── docs/             # Project documentation
└── memory-bank/      # Memory bank files
```

## Docker Setup Instructions

### Prerequisites
- Docker
- Docker Compose

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/inkbytefo/11.git
   cd 11
   ```

2. Start the development environment:
   ```bash
   docker-compose up -d
   ```

This will start all services:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- PostgreSQL Database: localhost:5432

### Docker Commands

#### Start Services
```bash
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d [service_name]
```

#### Stop Services
```bash
# Stop all services
docker-compose down

# Stop and remove volumes (clean state)
docker-compose down -v
```

#### View Logs
```bash
# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f [service_name]
```

#### Rebuild Services
```bash
# Rebuild all services
docker-compose up -d --build

# Rebuild specific service
docker-compose up -d --build [service_name]
```

## Development

### Frontend Development
- Development server runs on `http://localhost:5173`
- Backend API runs on `http://localhost:3000`
- API health check: `http://localhost:3000/api/health`

### Desktop Application (Tauri)
To develop the desktop application:

1. Install Rust and system dependencies:
   ```bash
   # Windows (via Chocolatey)
   choco install rust-ms visual-studio-2022-buildtools

   # macOS
   brew install rust

   # Linux
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run in development mode:
   ```bash
   npm run tauri:dev
   ```

5. Build desktop application:
   ```bash
   npm run tauri:build
   ```

The build output will be available in `frontend/src-tauri/target/release`.

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Frontend Checks:**
  - Linting with ESLint
  - Unit tests with Jest
  
- **Backend Checks:**
  - Linting with ESLint
  - Unit tests with Jest
  - Docker image build

- **Integration:**
  - Docker Compose build
  - Health check verification

The pipeline runs automatically on:
- Every push to main branch
- Every pull request to main branch

## Documentation

Refer to the `docs` directory for detailed documentation about:
- Project Overview
- Architecture
- Development Guide
- Testing Strategy
- Deployment Guide
- Improvement Suggestions
