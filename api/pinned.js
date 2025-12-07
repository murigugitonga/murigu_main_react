export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  const username = "murigugitonga"; 

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              primaryLanguage {
                name
                color
              }
              stargazerCount
              forkCount
            }
          }
        }
      }
    }
  `;

  try {
    const githubResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await githubResponse.json();

    if (data.errors) {
      return res.status(500).json({ error: data.errors });
    }

    const items = data.data.user.pinnedItems.nodes;
    res.status(200).json(items);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: err.message });
  }
}
