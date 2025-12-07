import { useEffect, useState } from "react";

// Utility to convert date to "time ago" format
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
    console.error("Vercel API error:", err);
    } finally {
    setLoading(false);
    }
    };

    fetchPinned();


}, []);

if (loading) return <p>Loading...</p>;

return ( <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
{repos.map((r) => ( <div key={r.name} className="bg-white p-5 rounded shadow hover:shadow-lg transition-shadow"> <a
         href={r.url}
         target="_blank"
         rel="noreferrer"
         className="font-bold text-lg hover:underline"
       >
{r.name} </a> <p className="text-sm mt-2 text-gray-700">{r.description}</p> <div className="mt-3 text-sm flex items-center gap-4">
{r.primaryLanguage && ( <span className="flex items-center gap-1">
<span
className="w-3 h-3 rounded-full"
style={{ backgroundColor: r.primaryLanguage.color || "#000" }}
></span>
{r.primaryLanguage.name} </span>
)} <span>🕒 {timeAgo(r.updatedAt)}</span> </div> </div>
))} </div>
);
}
