# Auto-Commit Setup Guide

This guide explains how to set up automated Git commits every 15 minutes on macOS.

## Option 1: Using launchd (Recommended for macOS)

### Setup Steps:

1. **Copy the plist file to LaunchAgents directory:**
   ```bash
   cp scripts/com.github.auto-commit.plist ~/Library/LaunchAgents/
   ```

2. **Load the service:**
   ```bash
   launchctl load ~/Library/LaunchAgents/com.github.auto-commit.plist
   ```

3. **Start the service:**
   ```bash
   launchctl start com.github.auto-commit
   ```

### Managing the Service:

- **Check status:**
  ```bash
  launchctl list | grep auto-commit
  ```

- **Stop the service:**
  ```bash
  launchctl stop com.github.auto-commit
  ```

- **Unload the service (to disable):**
  ```bash
  launchctl unload ~/Library/LaunchAgents/com.github.auto-commit.plist
  ```

- **View logs:**
  ```bash
  tail -f scripts/auto-commit.log
  tail -f scripts/auto-commit.error.log
  ```

## Option 2: Using Cron

1. **Open crontab:**
   ```bash
   crontab -e
   ```

2. **Add this line (runs every 15 minutes):**
   ```bash
   */15 * * * * /Users/chris/Documents/GitHub/nextjs-boilerplate/scripts/auto-commit.sh >> /Users/chris/Documents/GitHub/nextjs-boilerplate/scripts/auto-commit.log 2>&1
   ```

## Important Notes:

⚠️ **Security Considerations:**
- The script will commit ALL changes in your repository
- Make sure you're comfortable with auto-committing your work
- Consider using a separate branch for auto-commits

⚠️ **Git Configuration:**
- Ensure your Git user name and email are configured:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

⚠️ **Auto-Push:**
- By default, the script does NOT auto-push to GitHub
- To enable auto-push, uncomment the `git push` line in `auto-commit.sh`
- **Warning:** Auto-push can cause issues if you're collaborating with others

⚠️ **What Gets Committed:**
- The script commits all changes (staged and unstaged)
- Files in `.gitignore` are excluded as normal
- Empty commits are skipped (no commit if there are no changes)

## Customization:

- **Change interval:** Edit the `StartInterval` value in the plist file (value is in seconds, 900 = 15 minutes)
- **Change commit message:** Edit the `COMMIT_MESSAGE` variable in `auto-commit.sh`
- **Add filters:** Modify `auto-commit.sh` to only commit specific files or directories
