import Projects from "../SoftwareProj";
import SectionHeader from "../SectHeader";


export default function AllProjects(){
    return(
        <div className="flex flex-col space-y-4 items-center justify-center">
            <SectionHeader sectHeading="Software"/>
            <div className="block">
                <Projects/>
            </div>
        </div>
    );
}

