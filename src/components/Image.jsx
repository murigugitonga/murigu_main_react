import { useState } from "react"
import {murigu } from "../assets/images"

export default function PersonalDetail() {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/4">
            <div className="relative flex items-center justify-center w-full rounded-lg">
                {/* Skeleton Loader */}
                {!loaded && (
                    <div className={`
                    absolute inset-0 rounded-lg bg-gray-300 animate-pulse
                    transition-opacity duration-300
                    ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
                )}

                    {/* Image */}
                    <img
                        src={murigu}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        alt="Murigu Gitonga"
                        className={`
                        object-cover w-4/5 h-full md:w-full lg:w-1/2 aspect-auto
                        rounded-lg
                        transition-all duration-500 ease-in-out
                        ${
                            loaded
                            ? "opacity-100 scale-100 ring-2 ring-offset-4 ring-blue-600"
                            : "opacity-0 scale-95"
                        }
                        `}
                    />
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
                <div className="flex flex-col items-center space-y-0">
                    <h2 className="text-xl font-medium">Murigu Gitonga</h2>
                    <h3 className="text-[14px] text-gray-500 dark:text-gray-300/70 font-normal">Software Engineer</h3>
                </div>
                <div className="hidden w-full grid-cols-2 gap-5 text-sm md:grid-cols-1 lg:grid-cols-2 place-items-center">
                    {/* <SkillMarquee/> */}
                    {/* <Skillset/> */}
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Artificial Intelligence</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Systems Engineering</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 justify-self-center md:justify-self-start lg:justify-self-center col-span-2 text-gray-300 whitespace-nowrap md:text-center">Software Development</span>
                </div>
                <div className="flex flex-col space-y-2.5 justify-center px-4 italic text-gray-500 dark:text-gray-300/80 max-w-prose leading-relaxed md:px-0">
                    <p className="text-[13px] text-center">I am a computer scientist and a software & systems engineer working at the intersection of applied research and systems engineering to solve complex, high-impact problems across diverse domains.</p>
                    <p className="text-[13px] text-center">I am especially interested in systems that integrate artificial intelligence and other emerging technologies to enhance efficiency and capability.</p>
                    <p className="text-[13px] text-center">Welcome to my digital abode.</p>
                </div>
            </div>
        </div>
    )
}