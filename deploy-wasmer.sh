#!/bin/bash

# Music Library VIP - Wasmer Deployment Script
echo "🎵 Deploying Music Library VIP to Wasmer..."
echo ""

# Check if build exists
if [ ! -d "dist" ]; then
    echo "📦 Building project first..."
    npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build failed! Please fix the errors above."
        exit 1
    fi
fi

echo "✅ Build successful!"
echo ""
echo "📋 Deployment Instructions for Wasmer:"
echo ""
echo "1. Go to https://wasmer.io/deploy"
echo "2. Sign in to your Wasmer account"
echo "3. Click 'Deploy App'"
echo "4. Upload your project files or connect your GitHub repository"
echo "5. Use these settings:"
echo "   - Build Command: npm run build"
echo "   - Output Directory: dist"
echo "   - Start Command: python -m http.server 8000 --directory dist"
echo ""
echo "🔧 Your wasmer.toml configuration is ready!"
echo "📁 Your project is built in the 'dist' directory"
echo ""
echo "🚀 Alternative: Use 'wasmer deploy' command if CLI is working"
echo ""
echo "🌐 Your site will be available at: https://your-app-name.wasmer.app"