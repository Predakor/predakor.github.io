async function getProjects(): Promise<[]> {
  const url = "https://api.github.com/users/Predakor/repos";
  const auth = "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";
  const headers = { Accept: "application/vnd.github.mercy-preview+json" };

  const result = await fetch(url, { headers });

  console.log(result.json());

  return [];
}

export { getProjects };
