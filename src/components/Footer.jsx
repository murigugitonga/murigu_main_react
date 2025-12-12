import {  } from "react-icons/fa"
import { FaFacebook, FaXTwitter, FaLinkedin, FaMedium, FaMediumM } from "react-icons/fa6"
export default function Footer(){
    return(
        <>
        <div className="flex flex-col items-center justify-center w-full space-y-5 md:max-w-96 bg-inherit">
         <nav className="flex justify-center w-full space-x-14">
            <a href="https://www.facebook.com/profile.php?id=100073308548686" target="_blank">
                <FaFacebook className="w-6 h-6 text-gray-700 transition hover:text-blue-600"/>
            </a>
            <a href="https://www.linkedin.com/in/murigugitonga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <FaLinkedin className="w-6 h-6 text-gray-700 transition hover:text-blue-600"/>
            </a>
            <a href="https://x.com/Imurigugitonga?t=i-3-KYfZ_dKrTgHLqH3jig&s=08" target="_blank">
                <FaXTwitter className="w-6 h-6 text-gray-700 transition hover:text-blue-600"/>
            </a>
            <a href="https://medium.com/@Murigucharles" target="_blank">
                <FaMediumM className="w-6 h-6 text-gray-700 transition hover:text-blue-600"/>
            </a>
         </nav>
         <div className="bg=[#faf9f6] items-center border-x border-t px-10 mx-12 md:max-w-96 border-gray-700/40 rounded-t-lg p-4 flex">
            <div className="flex flex-col space-y-0.5 items-center text-gray-600 text-[10px]">
                <h3>Murigu Gitonga &copy; { new Date().getFullYear()}.</h3>
                <p>All Rights Reserved.</p>
                <p>Powered by react & tailwind.</p>
            </div>      
         </div>
        </div>
        </>
    )
}
