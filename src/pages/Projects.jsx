import { github } from "../assets/images";
import PageWrapper from "../components/PageWrapper";
import SectionHeader from "../components/SectHeader";
import Projects from "../components/SoftwareProj";

export default function Contact() {
  return (
    <PageWrapper>
      {/**Software */}
      <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium text-gray-700">Software</h3>
          <Projects/>
      </div>
      {/** research papers */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-medium text-gray-700">Research papers</h3>
        <div className="block">
            <span className="text-sm text-gray-300">Coming soon...</span>
      </div>
      </div>
      {/** featured talks */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-medium text-gray-700">Featured talks</h3>
        <div className="block">
            <span className="text-sm text-gray-300">Coming soon...</span>
        </div>
      </div>
      
    </PageWrapper>
  );
}
