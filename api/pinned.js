export default async function handler(req, res) {
// --- CORS headers ---
const allowedOrigins = [
"[https://murigugitonga.github.io](https://murigugitonga.github.io)", // Replace with your GitHub Pages URL
"http://localhost:5173",      // Local dev URL
];

const origin = req.headers.origin;
if (allowedOrigins.includes(origin)) {
res.setHeader("Access-Control-Allow-Origin", origin);
}

res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// Handle preflight OPTIONS requests
if (req.method === "OPTIONS") return res.status(200).end();

const token = process.env.GITHUB_TOKEN; // Make sure this is set in Vercel
const username = "murigugitonga";       // Replace with your GitHub username

const query = `     query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              updatedAt
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

try {
const githubResponse = await fetch("[https://api.github.com/graphql](https://api.github.com/graphql)", {
method: "POST",
headers: {
Authorization: `Bearer ${token}`,
"Content-Type": "application/json",
},
body: JSON.stringify({ query }),
});

```
const data = await githubResponse.json();

if (data.errors) {
  return res.status(500).json({ error: data.errors });
}

const items = data.data.user.pinnedItems.nodes;
res.status(200).json(items);
```

} catch (err) {
console.error("Server error:", err);
res.status(500).json({ error: err.message });
}
}
