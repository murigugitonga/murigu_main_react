import {defenceCard2, defenseCard, coverOne } from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function SystemsEng() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Systems Engineering"/>
            {/**Section Header goes here */}
            <Feature 
                title="Gracefully scaling with complexity"
                image={coverOne}
                decription="As systems grow, complexity grows too and performance slows. The challenge thus becomes maintaing perfomance while growth happens"
            />
        </div>
    )
}