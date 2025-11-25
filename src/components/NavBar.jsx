//import { nav } from "framer-motion/client";
import { NavLink } from "react-router-dom";

export default function NavBar() {
     const linkBase =
    "px-4 pb-4 rounded-none transition-all duration-400 ease-in-out text-gray-700";
    const active =
    "border-b border-blue-700 text-blue-700 font-semibold";
    return (
        <nav className="flex gap-6 p-4 bg-inherit border-b border-gray-700/40">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
                }
            >
                About
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
                }
            >
                Projects
            </NavLink>
        </nav>
    )
}