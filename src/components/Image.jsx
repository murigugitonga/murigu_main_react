export default function PersonalDetail() {
    return (
        <div className="flex flex-col w-full md:w-1/3">
            <div>
                <img src="src/assets/images/meNoDarpa.png" className="w-full lg:w-1/3 h-auto aspect-auto" alt="" />
            </div>
            <div className="flex flex-col space-y-4 w-full items-center md:items-start">
                <div>
                    <h2 className="text-2xl font-semibold">Murigu Gitonga</h2>
                    <h3 className="text-xl font-medium text-gray-700">Computer Scientist</h3>
                </div>
                <div className="flex w-full justify-evenly">
                    <span>AI Integration</span> | 
                    <span> FullStack</span> |
                    <span>UI/UX</span>
                </div>
            </div>
        </div>
    )
}