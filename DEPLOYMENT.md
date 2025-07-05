# TBRS SvelteKit App - Docker Deployment

This guide shows how to deploy the TBRS SvelteKit app on a Raspberry Pi using Docker.

## Prerequisites

- Raspberry Pi with Docker and Docker Compose installed
- Git to clone the repository

## Quick Start

1. **Clone and navigate to the project:**
   ```bash
   git clone <your-repo-url>
   cd tbrs
   ```

2. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

3. **Access the app:**
   - Open your browser to `http://your-pi-ip:8090`
   - The app will be available on port 8090

## Docker Commands

### Build the image:
```bash
docker build -t tbrs-app .
```

### Run the container:
```bash
docker run -p 8090:3000 tbrs-app
```

### View logs:
```bash
docker-compose logs -f
```

### Stop the app:
```bash
docker-compose down
```

### Update the app:
```bash
git pull
docker-compose down
docker-compose up -d --build
```

## Configuration

### Environment Variables
You can customize the app by setting environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - HOSTNAME=0.0.0.0
```

### Port Configuration
To change the port, modify the `ports` section in `docker-compose.yml`:
```yaml
ports:
  - "8090:3000"  # Maps host port 8090 to container port 3000
```

## Resource Limits

The Docker Compose file includes resource limits suitable for Raspberry Pi:
- Memory: 512MB
- CPU: 0.5 cores

Adjust these based on your Pi's specifications.

## Health Checks

The app includes health checks that monitor if the web server is responding. You can check the health status with:

```bash
docker-compose ps
```

## Troubleshooting

### Check if the container is running:
```bash
docker ps
```

### View container logs:
```bash
docker-compose logs tbrs-app
```

### Access container shell:
```bash
docker-compose exec tbrs-app sh
```

### Restart the service:
```bash
docker-compose restart
```

## Production Considerations

1. **Use a reverse proxy** (like nginx) in front of the app
2. **Set up SSL/TLS** certificates
3. **Configure automatic restarts** with `restart: unless-stopped`
4. **Monitor resource usage** on your Pi
5. **Set up log rotation** for Docker logs

## Development

For development, you can run the app locally without Docker:

```bash
npm install
npm run dev
```

This will start the development server on `http://localhost:5173`. 