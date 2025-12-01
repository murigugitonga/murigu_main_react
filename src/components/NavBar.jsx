import { NavLink } from "react-router-dom";

export default function NavBar() {
  // smaller pb on links so the active border can align with nav border
  const linkBase = "px-4 pb-2 rounded-none transition-all duration-200 ease-in-out";

  // active: explicit blue text + 4px thick underline + slight negative bottom margin
  // so the underline visually sits on the nav's border-b
  const active = "text-blue-600 font-semibold border-b-4 border-blue-600 mb-0";

  return (
    // nav has its own base border; reduce nav bottom padding so alignment looks flush
    <nav className="flex gap-8 p-4 pb-0 bg-inherit border-b border-gray-200">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700"}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "text-gray-700"}`
        }
      >
        Projects
      </NavLink>
    </nav>
  );
}
