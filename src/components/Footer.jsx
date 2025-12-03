import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6"
export default function Footer(){
    return(
        <>
        <div className="flex flex-col space-y-5 w-full items-center justify-center md:max-w-96 bg-inherit">
         <nav className="flex w-full space-x-14 justify-center">
            <a href="facebook.com" target="_blank">
                <FaFacebook className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"/>
            </a>
            <a href="facebook.com" target="_blank">
                <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"/>
            </a>
            <a href="facebook.com" target="_blank">
                <FaXTwitter className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"/>
            </a>
         </nav>
         <div className="bg=[#faf9f6] items-center border-x border-t px-10 mx-12 md:max-w-96 border-gray-700/40 rounded-t-lg p-4 flex">
            <div className="flex flex-col space-y-0.5 items-center text-gray-600 text-xs">
                <h3>Murigu Gitonga &copy; { new Date().getFullYear()}</h3>
                <p>Powered by React & Tailwind</p>
                <p>All Rights Reserved.</p>
            </div>      
         </div>
        </div>
        </>
    )
}
