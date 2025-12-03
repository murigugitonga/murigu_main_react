import {murigu } from "../assets/images"
//import SkillMarquee from "./PureMarquee"
//import Skillset from "./Expertise"


export default function PersonalDetail() {
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/4">
            <div className="relative flex w-full items-center justify-center">
                <img src={murigu} loading="lazy" className="w-4/5 md:w-full h-full rounded-lg ring-2 ring-offset-4 ring-blue-600 lg:w-1/2 aspect-auto object-cover" alt="Murigu"/>
            </div>
            <div className="flex flex-col space-y-4 w-full items-center">
                <div className="flex flex-col space-y-0 items-center">
                    <h2 className="text-xl font-semibold">Murigu Gitonga</h2>
                    <h3 className="text-sm font-medium text-gray-700/80">Computer scientist</h3>
                </div>
                <div className="grid grid-cols-2 gap-5 place-items-center w-full text-sm">
                    {/* <SkillMarquee/> */}
                    {/* <Skillset/> */}
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Artificial Intelligence</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 text-gray-300 md:text-center whitespace-nowrap">Systems Engineering</span> 
                    <span className="bg-gray-900/85 py-0.5 px-2 justify-self-center col-span-2 text-gray-300 whitespace-nowrap md:text-center">Software Development</span>
                </div>
                <div className="flex italic justify-center text-gray-500 px-4 md:px-0">
                    <p className="text-center">I specialize in building integrated systems that combine AI, automation, and robust software architecture.</p>
                </div>
            </div>
        </div>
    )
}