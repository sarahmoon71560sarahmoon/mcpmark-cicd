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