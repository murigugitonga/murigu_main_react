import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPinned = async () => {
      try {
        const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=murigugitonga`);
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Pinned API error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPinned();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map(r => (
        <div key={r.repo} className="bg-white p-5 rounded shadow">
          <a href={r.link} target="_blank" rel="noreferrer" className="font-bold">{r.repo}</a>
          <p className="text-sm mt-2">{r.description}</p>
          <div className="mt-3 text-sm text-gray-500">{r.language}</div>
        </div>
      ))}
    </div>
  );
}
