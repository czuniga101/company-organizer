const keyFor = (companyKey: string) => `vote_${companyKey}`;

export function getUserVote(companyKey: string): 0 | 1 | -1 {
  const raw = localStorage.getItem(keyFor(companyKey));
  if (raw === "1") return 1;
  if (raw === "-1") return -1;
  return 0;
}

export function setUserVote(companyKey: string, vote: 0 | 1 | -1): void {
  localStorage.setItem(keyFor(companyKey), String(vote));
}

export function getVoteCount(companyKey: string): number {
  return 1 + getUserVote(companyKey);
}
