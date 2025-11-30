//import { span } from "framer-motion/client"

//import { span } from "framer-motion/client"

export default function SkillMarquee() {
    const items = ["Artificial Intelligence","Systems Engineering","Software Development"]
    return (
        <div className="relative max-w-screen-md">
            <div className="marquee flex items-center justify-evenly w-full">
                {
                    items.map((item, i)=>(
                        <span
                            key ={i}
                            
                        >{item}</span>
                    ))
                }
                {/**Duplicating for infinite loop */}
                {
                    items.map((item, i) =>(
                        <span key={`dup-${i}`} className="text-sm" >{item}</span>
                    ))
                }
            </div>
        </div>
    )
}