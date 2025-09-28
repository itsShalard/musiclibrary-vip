#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Ready for Wasmer deployment."
    echo ""
    echo "To deploy to Wasmer:"
    echo "1. Make sure you have wasmer CLI installed"
    echo "2. Run: wasmer deploy"
    echo ""
    echo "Or visit: https://wasmer.io/deploy"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi