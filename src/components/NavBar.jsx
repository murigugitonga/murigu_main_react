import { NavLink } from "react-router-dom";

export default function NavBar() {
  // smaller pb on links so the active border can align with nav border
  const linkBase = "px-4 pb-2 rounded-none transition-all duration-200 ease-in-out";

  // active: explicit blue text + 4px thick underline + slight negative bottom margin
  // so the underline visually sits on the nav's border-b
  const active = "text-blue-600 dark:text-blue-500 font-semibold border-b-2 border-blue-600 dark:border-blue-500 mb-0";

  return (
    // nav has its own base border; reduce nav bottom padding so alignment looks flush
    <nav className="flex gap-8 p-4 pb-0 border-b border-gray-200 dark:border-gray-500 bg-inherit">
      <NavLink
        replace
        to="/"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700 dark:text-gray-400"}`
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700 dark:text-gray-400"}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700 dark:text-gray-400"}`
        }
      >
        Works
      </NavLink>
    </nav>
  );
}
