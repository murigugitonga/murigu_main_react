import { selfimage } from "../assets/images"



export default function PersonalDetail() {
    return (
        <div className="flex flex-col w-full space-y-4 md:space-y-0 md:w-1/3">
            <div className="flex w-full items-center justify-center">
                <img src={selfimage} className="w-3/4 h-auto rounded-full ring-4 ring-offset-2 ring-blue-600 lg:w-1/2 object-contain aspect-auto" alt="Murigu" />
            </div>
            <div className="flex flex-col space-y-4 w-full items-center md:items-start">
                <div className="flex flex-col space-y-1 items-center md:items-start">
                    <h2 className="text-3xl font-semibold">Murigu Gitonga</h2>
                    <h3 className="text-xl font-medium text-gray-600">Software Engineer</h3>
                </div>
                <div className="flex w-full justify-evenly text-lg text-gray-500">
                    <span>UI/UX</span> | 
                    <span> FullStack Web</span> |
                    <span>AI Integration</span>
                </div>
            </div>
        </div>
    )
}