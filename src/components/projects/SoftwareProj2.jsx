import { Clock, WifiOff, RefreshCcw } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

// Converts dates to relative time
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

export default function SoftwareProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const API_URL = "https://murigu-main-react.vercel.app/api/pinned";
  const CACHE_KEY = "pinned-projects-cache";

  const fetchPinned = useCallback(async () => {
    setLoading(true);
    setError(false);

    if (!navigator.onLine) {
      setIsOnline(false);

      // Try cached data
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        setRepos(JSON.parse(cached));
        setLoading(false);
        return;
      }

      setError(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch API");
      const data = await res.json();

      setRepos(data);
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      setError(false);
    } catch (err) {
      console.error("Projects API error:", err);

      // Fallback to cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        setRepos(JSON.parse(cached));
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchPinned();
  }, [fetchPinned]);

  // Live network detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      fetchPinned();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [fetchPinned]);

  // Skeleton loader
  const Skeleton = () => (
    <div className="bg-white p-5 dark:bg-[#1b1b1b] rounded shadow animate-pulse">
      <div className="h-5 w-1/2 bg-gray-300 dark:bg-gray-800 rounded mb-3"></div>
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded mb-4"></div>
      <div className="flex items-center gap-4 mt-3">
        <div className="h-3 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <WifiOff className="w-10 h-10 text-gray-400 mb-3" />

        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Projects unavailable
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-md">
          {isOnline
            ? "The GitHub service is temporarily unavailable."
            : "You are currently offline. Please check your internet connection."}
        </p>

        <button
          onClick={fetchPinned}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md
                     bg-blue-600 text-white text-sm font-medium
                     hover:bg-blue-700 transition"
        >
          <RefreshCcw className="w-4 h-4" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 px-2 py-4">
      {repos.map((r) => (
        <div
          key={r.name}
          className="bg-white p-5 rounded-md shadow hover:shadow-lg dark:bg-[#1b1b1b] transition-shadow"
        >
          <a
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-500 hover:text-blue-600 underline text-lg"
          >
            {r.name}
          </a>

          <p className="text-sm mt-2 text-gray-500 dark:text-gray-300/70">
            {r.description}
          </p>

          <div className="mt-3 w-full text-sm flex items-center justify-between gap-4">
            {r.primaryLanguage && (
              <span className="flex items-center gap-1 whitespace-nowrap">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: r.primaryLanguage.color || "#000" }}
                />
                {r.primaryLanguage.name}
              </span>
            )}

            <p className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="text-gray-500 w-4 h-4" />
              <span className="text-gray-400 text-[10px]">
                {timeAgo(r.updatedAt)}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
