import {defenceCard2, defenseCard, coverOne } from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function SystemsEng() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Systems Engineering"/>
            {/**Section Header goes here */}
            <Feature 
                title="Smart Systems"
                image={coverOne}
                decription="Advanced Systems continue to reshape the digital landscape"
            />
        </div>
    )
}