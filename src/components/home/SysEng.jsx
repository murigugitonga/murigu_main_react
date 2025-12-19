import {sysEngTransp} from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function SystemsEng() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Systems Engineering"/>
            {/**Section Header goes here */}
            <Feature 
                title="Gracefully scaling with complexity"
                image={sysEngTransp}
                description="Complexity grows exponentially with system growth. Systems engineering introduces order through interconnected
                components, interfaces and requirements. Through structured design, clear boundaries and thoughtul integration,
                systems can (and should) scale without introducing more complexity."
            />
        </div>
    )
}