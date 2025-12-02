import {murigu } from "../assets/images"
//import SkillMarquee from "./PureMarquee"
//import Skillset from "./Expertise"


export default function PersonalDetail() {
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/4">
            <div className="flex w-full items-center justify-center">
                <img src={murigu} loading="lazy" className="w-3/4 h-auto rounded-lg ring-2 ring-offset-4 ring-blue-600 lg:w-1/2 object-contain aspect-auto md:object-cover" alt="Murigu"/>
            </div>
            <div className="flex flex-col space-y-4 w-full items-center">
                <div className="flex flex-col -space-y-0.5 items-center">
                    <h2 className="text-xl font-semibold">Murigu Gitonga</h2>
                    <h3 className="text-sm font-medium text-gray-600/80">Computer scientist</h3>
                </div>
                <div className="flex w-full space-x-3 justify-center md:justify-between text-[12px] md:text-[15px] text-gray-500">
                    {/* <SkillMarquee/> */}
                    {/* <Skillset/> */}
                    <span className="md:text-center">Artificial Intelligence</span> 
                    <span className="md:text-center">Systems Engineering</span> 
                    <span className="md:text-center">Software Development</span>
                </div>
                <div className="flex italic justify-center text-gray-400 px-4 md:px-0">
                    <p className="text-center">I specialize in building integrated systems that combine AI, automation, and robust software architecture.</p>
                </div>
            </div>
        </div>
    )
}