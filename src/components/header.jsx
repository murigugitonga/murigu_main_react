import { logoimage } from "../assets/images"
import  MessageMenu  from "./MessageMenu"
import ToggleMode from "./ToggleMode"


export default function Header() {
    return (
        <header className="flex px-4 lg:container lg:mx-auto rounded-b-lg shadow-sm items-center justify-between border-b border-gray-700/40 w-full backdrop-blur-sm dark:backdrop-blur-md md:bg-inherit fixed dark:border-b dark:border-x dark:border-gray-500 top-0 z-30 py-2.5 bg-inherit">
            <div className="lg:container lg:mx-auto">
                <img src={logoimage} alt="Logo" className="w-12 h-auto md:w-16"/>
            </div>
            {/**Message icon & darkmode icon */}
            <div className="flex items-center space-x-4">
                <ToggleMode/>
                <MessageMenu/>
            </div>  
        </header>
    )
}
