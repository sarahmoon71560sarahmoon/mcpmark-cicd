# Automated Comment Bot

A repository to test GitHub automation for adding comments to issues.

## Automation Workflow

This repository includes a GitHub Actions workflow (`.github/workflows/auto-comment.yml`) that automatically adds a comment "Thank you for your contribution!" to any new issue created.

### How It Works

- Trigger: When an issue is opened (`issues: types: [opened]`)
- Action: Uses `actions/github-script` to post a comment via GitHub API
- Permissions: Requires `issues: write` permission

### Testing the Workflow

1. **Manual Trigger**: You can manually run the workflow from the "Actions" tab in GitHub:
   - Go to the repository's Actions tab
   - Select "Auto Comment on Issue" workflow
   - Click "Run workflow"
   - Provide an existing issue number (e.g., 2, 3, 4) to test the comment addition

2. **Create New Issues**: Due to account email verification requirements, creating new issues via API may be restricted. If you have verified email, you can create new issues via GitHub UI or API to trigger the automation automatically.

### Sample Issues

The repository already contains sample issues:
- #2: Bug report
- #3: Feature request (Epic)
- #4: Documentation update (Maintenance)

These issues already have automated comments from the existing issue‑automation workflow.

### Customization

You can modify the workflow to change the comment text, add conditions, or respond to other issue events (e.g., `labeled`, `closed`).

## Standalone Script

For learning purposes, a standalone Node.js script (`scripts/auto-comment.js`) is also provided. This script can be run locally or integrated into other automation systems.

### Prerequisites

- Node.js 18+
- A GitHub Personal Access Token with `repo` scope
- The repository environment variable `GITHUB_REPOSITORY` set to `owner/repo`

### Usage

```bash
cd scripts
npm install @octokit/rest
GITHUB_TOKEN=your_token GITHUB_REPOSITORY=sarahmoon71560sarahmoon/mcpmark-cicd node auto-comment.js 2
```

Optionally, you can provide a custom comment as the third argument:

```bash
node auto-comment.js 2 "Thank you for reporting this bug!"
```

### How It Works

The script uses the Octokit library to authenticate with GitHub's REST API and create a comment on the specified issue.

## Limitations

- The current GitHub account requires email verification to perform certain actions (creating repositories, issues, comments via API). However, GitHub Actions workflows run with a token that has write permissions, so automation will still work when triggered by events.
- If you encounter "email verification" errors when using the API directly, please verify your email address in GitHub account settings.

## Next Steps

1. Verify your email address on GitHub to lift API restrictions.
2. Create new issues via the GitHub UI to see the auto‑comment workflow in action.
3. Experiment with modifying the workflow to add different responses based on issue labels or content.