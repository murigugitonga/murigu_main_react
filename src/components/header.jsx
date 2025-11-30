import { logoimage } from "../assets/images"

export default function Header() {
    return (
        <div className="flex items-center border-b border-gray-700/40 w-full shadow backdrop-blur-sm md:bg-inherit fixed top-0 z-30 py-2.5 bg-inherit">
            <div className="md:container md:mx-auto">
                <img src={logoimage} alt="Logo" className="w-12 md:w-16 h-auto"/>
            </div>
            
        </div>
    )
}
