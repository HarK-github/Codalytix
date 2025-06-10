import { Octokit } from "@octokit/rest";
import { cache } from "react";

export const dynamic = 'force-dynamic';
const octokit = new Octokit({
  auth: process.env.GIT_TOKEN,
});

function extractClosedIssue(body) {
  if (!body) return null;
  const match = body.match(/#(\d+)/);
  return match ? parseInt(match[1]) : null;
}

function extractPointsFromLabels(labels) {
  if (!Array.isArray(labels)) return 0;

  const regex = /(\d+)\s*(?:points?|pts?|pt)/i;
  for (const label of labels) {
    if (label?.name && regex.test(label.name)) {
      const match = label.name.match(regex);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
  }

  return 0;
}

export async function fetch_solved_issues() {
  const result = await octokit.request("GET /search/issues", {
    q: "repo:Hark-github/Taskify is:pr is:merged",
  },{cache:'no-store'});

  const items = result.data.items;
  const contributors = {};

  for (const item of items) {
    const issueNumber = extractClosedIssue(item.body);
    const username = item.user.login;

    let points = 0;

    if (issueNumber) {
      try {
        const issue = await octokit.rest.issues.get({
          owner: "Hark-github", // ✅ Correct owner
          repo: "Taskify", // ✅ Correct repo (not with slash)
          issue_number: issueNumber,
        });

        points = extractPointsFromLabels(issue.data.labels);
      } catch (err) {
        console.error(`Failed to fetch issue #${issueNumber}`, err);
      }
    }

    if (!contributors[username]) {
      contributors[username] = {
        user: username,
        avatar: item.user.avatar_url,
        prCount: 0,
        points: 0,
      };
    }

    contributors[username].prCount += 1;
    contributors[username].points += points;
  }

  // Sort contributors by points descending
  const leaderboard = Object.values(contributors).sort((a, b) => b.points - a.points);

  return leaderboard;
}

export default async function fetchall() {
  const datas = await fetch_solved_issues();
  return datas;
}
