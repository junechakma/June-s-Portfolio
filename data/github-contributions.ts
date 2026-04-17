import type { Activity } from "@/components/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
  const res = await fetch(
    "https://github-contributions-api.jogruber.de/v4/junechakma?y=last",
    { next: { revalidate: 86400 } }
  );
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
}
