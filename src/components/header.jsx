import { logoimage } from "../assets/images"
import  MessageMenu  from "./MessageMenu"
export default function Header() {
    return (
        <div className="flex px-4 items-center justify-between border-b border-gray-700/40 w-full shadow backdrop-blur-sm md:bg-inherit fixed top-0 z-30 py-2.5 bg-inherit">
            <div className="lg:container lg:mx-auto">
                <img src={logoimage} alt="Logo" className="w-12 h-auto md:w-16"/>
            </div>
            {/**Message icon & darkmode icon */}
            <div className="flex items-center">
                <MessageMenu/>
            </div>
            
        </div>
    )
}
