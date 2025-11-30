#!/usr/bin/env node

/**
 * Simple script to add a comment to a GitHub issue.
 * This can be used as a standalone script or as part of a CI/CD pipeline.
 *
 * Usage:
 *   node scripts/auto-comment.js <issue-number> [comment-text]
 *
 * Environment variables required:
 *   - GITHUB_TOKEN: Personal access token with 'repo' scope
 *   - GITHUB_REPOSITORY: Repository in format 'owner/repo'
 */

const { Octokit } = require('@octokit/rest');
const core = require('@actions/core'); // optional, for GitHub Actions

async function main() {
  const issueNumber = parseInt(process.argv[2]);
  const customComment = process.argv[3];
  
  if (!issueNumber || isNaN(issueNumber)) {
    console.error('Error: Issue number is required and must be a number.');
    console.error('Usage: node scripts/auto-comment.js <issue-number> [comment-text]');
    process.exit(1);
  }

  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!token) {
    console.error('Error: GITHUB_TOKEN environment variable is not set.');
    process.exit(1);
  }

  if (!repository) {
    console.error('Error: GITHUB_REPOSITORY environment variable is not set.');
    process.exit(1);
  }

  const [owner, repo] = repository.split('/');
  const comment = customComment || 'Thank you for your contribution!';

  try {
    const octokit = new Octokit({ auth: token });
    
    const response = await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: comment,
    });

    console.log(`Comment added to issue #${issueNumber}: ${response.data.html_url}`);
  } catch (error) {
    console.error('Failed to add comment:', error.message);
    if (error.status) {
      console.error('Status:', error.status);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = main;