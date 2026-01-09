import PageWrapper from "../components/PageWrapper";
import Projects from "../components/SoftwareProj";
import SoftwareProjects from "../components/projects/SoftwareProj2";
export default function Contact() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full space-y-4 relative">
        <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Featured Works</h2>
        </div>
        <div className="flex flex-col space-y-2.5">
            {/**software Engineering */}
            <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-medium text-gray-800/80 dark:text-gray-200">Software</h3>
                {/* <Projects/> */}
                <SoftwareProjects/>
            </div>
            {/** Selected Blogs */}
            {/* <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-medium text-gray-800/80 dark:text-gray-200">Selected Blogs</h3>
            </div> */}
            {/** research papers */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-medium text-gray-800/80 dark:text-gray-200">Research Papers</h3>
              <div className="block">
                  <span className="text-sm italic text-gray-400 dark:text-gray-500">Coming soon...</span>
            </div>
            </div>
            {/** Featured talks */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-medium text-gray-800/80 dark:text-gray-200">Featured Talks</h3>
              <div className="block">
                  <span className="text-sm text-gray-400 italic dark:text-gray-500">Coming soon...</span>
              </div>
            </div>
          </div>
      </div>
    </PageWrapper>
  );
}
