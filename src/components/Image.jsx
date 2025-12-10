import { useState } from "react"
import {murigu } from "../assets/images"

export default function PersonalDetail() {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/4">
            <div className="relative flex items-center justify-center w-full">
                {/**pulse animation placeholder */}
                {!loaded && (
                    <div className="absolute inset-0 rounded-lg bg-gray-300 animate-pulse"/>
                )}
                <img src={murigu} loading="lazy" onLoad={()=>setLoaded(true)} className={`object-cover ${loaded ? "opacity-100":"opacity-0"} transition-opacity duration-300  w-4/5 h-full rounded-lg md:w-full ring-2 ring-offset-4 ring-blue-600 lg:w-1/2 aspect-auto`} alt="Murigu"/>
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
                <div className="flex flex-col items-center space-y-0">
                    <h2 className="text-xl font-medium">Murigu Gitonga</h2>
                    <h3 className="text-[16px] text-gray-600 font-normal">Software Engineer</h3>
                </div>
                <div className="grid w-full grid-cols-2 gap-5 text-sm md:grid-cols-1 xl:grid-cols-2 place-items-center">
                    {/* <SkillMarquee/> */}
                    {/* <Skillset/> */}
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Artificial Intelligence</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Systems Engineering</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 justify-self-center col-span-2 text-gray-300 whitespace-nowrap md:text-center">Software Development</span>
                </div>
                <div className="flex flex-col space-y-3 justify-center px-4 italic text-gray-500 md:px-0">
                    <p className="text-sm text-center">I specialize in building integrated systems that combine artificial intelligence, modern engineering principles and robust software architecture.</p>
                    <p className="text-sm text-center">If you are here, you are home already.</p>
                </div>
            </div>
        </div>
    )
}