const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" ? "/abries-hotel-premium" : "";

export function asset(path: `/${string}`) {
  return `${githubPagesBasePath}${path}`;
}
