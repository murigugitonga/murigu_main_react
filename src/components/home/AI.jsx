import {AITransp, AIFull } from "../../assets/images"
import SectionHeader from "../SectHeader"
import Feature from "./SectTemp"


export default function AiSect() {
    return(
        <div className="flex flex-col space-y-4">
            <SectionHeader sectHeading="Artificial Intelligence"/>
            {/**Section Header goes here */}
            <Feature 
                title="Thinking machines"
                image={AIFull}
                reverse = {true}
                description="AI systems extend our ability to analyze patterns, automate decisions and model complex environments.
                At their core, they transform data into structured intelligence that can greatly enhance human reasoning.
                Understanding how these systems learn and where they fail is essential for building reliable artificial intelligence."
            />
        </div>
    )
}