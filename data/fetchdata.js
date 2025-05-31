import { Octokit } from "@octokit/rest";

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
  console.log(labels)
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
  // const result = await octokit.request("GET /search/issues", {
  //   q: "repo:Hark-github/GitStartedWithUs is:pr is:merged",
  // });
  const result = await octokit.request("GET /search/issues", {
    q: "repo:OpenLake/Centre-for-Career-Planning-and-Services-Portal is:pr is:merged",
  });
  
  const items = result.data.items;

  const contributors = {};

  for (const item of items) {
    const issueNumber = extractClosedIssue(item.body);
    const username = item.user.login;

    let points = 0;

    if (issueNumber) {
      try {
        // const issue = await octokit.rest.issues.get({
        //   owner: "Hark-github",
        //   repo: "GitStartedWithUs",
        //   issue_number: String(issueNumber),
        // });
        const issue = await octokit.rest.issues.get({
          owner: "Hark-github",
          repo: "OpenLake/Centre-for-Career-Planning-and-Services-Portal",
          issue_number: String(issueNumber),
        });
        console.log("ISSUES --------------------",issue);
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

  // Convert to array and sort by points descending
  const leaderboard = Object.values(contributors).sort((a, b) => b.points - a.points);

  return leaderboard;
}

export default async function fetchall() {
  const datas = await fetch_solved_issues();
   
  return datas;
}
