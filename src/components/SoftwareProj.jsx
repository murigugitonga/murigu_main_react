import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Vercel API endpoint
  const VERCEL_API_URL = "https://murigu-main-react.vercel.app/api/pinned";

  useEffect(() => {
    const fetchPinned = async () => {
      try {
        const res = await fetch(VERCEL_API_URL);
        if (!res.ok) throw new Error("Failed to fetch API");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Vercel API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPinned();
  }, []);

  const skeletons = Array.from({ length: 6 });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {loading
        ? skeletons.map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-5 animate-pulse">
              <div className="h-6 bg-gray-300  rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/6"></div>
                <div className="h-3 bg-gray-300 rounded w-1/6"></div>
              </div>
            </div>
          ))
        : repos.map((r) => (
            <div
              key={r.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-5 flex flex-col justify-between"
            >
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-lg hover:underline"
              >
                {r.name}
              </a>
              {r.description && (
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{r.description}</p>
              )}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                {r.primaryLanguage && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: r.primaryLanguage.color || "#000" }}
                    ></span>
                    {r.primaryLanguage.name}
                  </span>
                )}
                <span>⭐ {r.stargazerCount}</span>
                <span>🍴 {r.forkCount}</span>
              </div>
            </div>
          ))}
    </div>
  );
}
