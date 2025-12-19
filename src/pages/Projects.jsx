import PageWrapper from "../components/PageWrapper";
import Projects from "../components/SoftwareProj";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full space-y-4 relative">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Featured Works</h2>
        </div>
        <div className="flex flex-col space-y-2.5">
            {/**software Engineering */}
            <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-medium text-gray-800/80">Software</h3>
                <Projects/>
            </div>
            {/** research papers */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-medium text-gray-800/80">Research papers</h3>
              <div className="block">
                  <span className="text-sm text-gray-400">Coming soon...</span>
            </div>
            </div>
            {/** featured talks */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-medium text-gray-700">Featured talks</h3>
              <div className="block">
                  <span className="text-sm text-gray-400">Coming soon...</span>
              </div>
            </div>
          </div>
      </div>
    </PageWrapper>
  );
}
