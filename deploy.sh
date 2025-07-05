#!/bin/bash

# TBRS SvelteKit App Deployment Script for Raspberry Pi
# This script helps deploy the app on a Raspberry Pi

set -e

echo "🚀 TBRS SvelteKit App Deployment"
echo "=================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon is not running. Please start Docker first."
    exit 1
fi

echo "✅ Docker environment check passed"

# Build the application
echo "🔨 Building the application..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t tbrs-app .

# Start the application
echo "🚀 Starting the application with Docker Compose..."
docker-compose up -d

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📱 Your TBRS app should now be running at:"
echo "   http://localhost:8089"
echo ""
echo "🔧 Useful commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop app:  docker-compose down"
echo "   Restart:   docker-compose restart"
echo "   Update:    git pull && docker-compose down && docker-compose up -d --build"
echo "" 