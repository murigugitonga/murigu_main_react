import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

// this utility function converts dates and displayes projects update time in respect to the current time
function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return interval + " years ago";
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + " months ago";
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return interval + " days ago";
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return interval + " hours ago";
  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + " minutes ago";
  return "just now";
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://murigu-main-react.vercel.app/api/pinned";

  useEffect(() => {
    const fetchPinned = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch API");
            const data = await res.json();
            setRepos(data);
        } catch (err) {
        console.error("Projects API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPinned();
  }, []);

  // Skeleton loader
  const Skeleton = () => (
    <div className="bg-white p-5 rounded shadow animate-pulse">
      <div className="h-5 w-1/2 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>
      <div className="flex items-center gap-4 mt-3">
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
        <div className="h-3 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      {repos.map((r) => (
        <div
          key={r.name}
          className="bg-white p-5 rounded shadow hover:shadow-lg transition-shadow"
        >
          <a
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 hover:text-blue-600 underline text-lg"
          >
            {r.name}
          </a>

          <p className="text-sm mt-2 text-gray-600">{r.description}</p>

          <div className="mt-3 w-full text-sm flex items-center justify-between gap-4">
            {r.primaryLanguage && (
              <span className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: r.primaryLanguage.color || "#000" }}
                ></span>
                {r.primaryLanguage.name}
              </span>
            )}
            {/** relative time since project was last uploaded */}
            <p className="flex items-center w-full whitespace-nowrap space-x-3">
              <Clock className="w-4 h-4"/>
              <span className="text-gray-500 text-sm whitespace-nowrap">{timeAgo(r.updatedAt)}</span>

            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
