import {defenceCard2, defenseCard, coverOne } from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function AiSect() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Artificial Intelligence"/>
            {/**Section Header goes here */}
            <Feature 
                title="Thinking machines"
                image={defenceCard2}
                decription="Advanced Systems continue to reshape the digital landscape"
            />
        </div>
    )
}