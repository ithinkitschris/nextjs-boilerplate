#!/bin/bash

# Auto-commit script for GitHub
# This script checks for changes and commits them if any exist

# Navigate to the repository directory
cd "$(dirname "$0")/.." || exit 1

# Check if there are any changes
if git diff-index --quiet HEAD --; then
    # No changes to commit
    echo "$(date): No changes to commit"
    exit 0
fi

# Stage all changes
git add -A

# Create commit with timestamp
COMMIT_MESSAGE="Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MESSAGE"

# Push to remote (optional - uncomment if you want auto-push)
# git push origin HEAD

echo "$(date): Committed changes: $COMMIT_MESSAGE"
