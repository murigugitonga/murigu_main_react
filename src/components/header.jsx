import { logoimage } from "../assets/images"

logoimage
export default function Header() {
    return (
        <div className="border-b border-gray-700/40 w-full shadow backdrop-blur-sm md:container md:mx-auto fixed top-0 z-30 py-2.5 bg-inherit ">
            <img src={logoimage} alt="Logo" className="w-20 h-auto"/>
    
        </div>
    )
}
