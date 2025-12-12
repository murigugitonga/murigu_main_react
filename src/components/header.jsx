import { logoimage } from "../assets/images"
//import SubtleToggle from "./CoolToggle"
import  MessageMenu  from "./MessageMenu"
//import ThemeToggle from "./ModeToggle"

export default function Header() {
    return (
        <header className="flex px-4 lg:container lg:mx-auto rounded-b-lg shadow-sm items-center justify-between border-b border-gray-700/40 w-full backdrop-blur-sm md:bg-inherit fixed top-0 z-30 py-2.5 bg-inherit">
            <div className="lg:container lg:mx-auto">
                <img src={logoimage} alt="Logo" className="w-12 h-auto md:w-16"/>
            </div>
            {/**Message icon & darkmode icon */}
            <div className="flex items-center">
                <MessageMenu/>
                {/* <SubtleToggle/> */}
                {/* <ThemeToggle/> */}
            </div>
            
        </header>
    )
}
