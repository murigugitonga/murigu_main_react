import {softEng } from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function SoftwareEng() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Software Development"/>
            {/**Section Header goes here */}
            <Feature 
                title="Robust digital ecosystems"
                reverse={true}
                image={softEng}
                decription="Good code serves systems, users, and long term goals. Well-crafted software is not only functional,
                but is also maintainable, scalable and build with intent. Good software systems are systems that efficiently address
                specified problem domains while leaving room for emergent and unforeseen problems."
            />
        </div>
    )
}