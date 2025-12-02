import {murigu } from "../assets/images"
//import SkillMarquee from "./PureMarquee"
//import Skillset from "./Expertise"


export default function PersonalDetail() {
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/4">
            <div className="flex w-full items-center justify-center">
                <img src={murigu} loading="eager" className="w-3/4 h-auto rounded-full ring-4 ring-offset-4 ring-blue-600 lg:w-1/2 object-contain aspect-auto" alt="Murigu"/>
            </div>
            <div className="flex flex-col space-y-4 w-full items-center">
                <div className="flex flex-col -space-y-1.5 items-center md:items-start">
                    <h2 className="text-xl font-semibold">Murigu Gitonga</h2>
                    <h3 className="text-sm font-medium text-gray-600">Computer scientist</h3>
                </div>
                <div className="flex w-full space-x-3 justify-center md:justify-between text-xs text-gray-500">
                    {/* <SkillMarquee/> */}
                    {/* <Skillset/> */}
                    <span>Artificial Intelligence</span> 
                    <span>Systems Engineering</span> 
                    <span>Software Development</span>
                </div>
            </div>
        </div>
    )
}