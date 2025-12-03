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
                image={softEng}
                decription="Advanced Systems continue to reshape the digital landscape"
            />
        </div>
    )
}