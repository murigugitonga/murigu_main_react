import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative w-full flex flex-col space-y-5">
            <div className="w-full flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold text-gray-700">A brief lecture on modern systems...</h1>
            </div>
            {/**Systems that scale */}
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-gray-700">Systems that gracefully scale with complexity</h2>
              <div className="mt-2 dark:text-gray-600">
                <p>
                  There are two types of systems in this world; systems that just grow - and systems that gracefully
                  grow with complexity. The former is represenative of most systems in the world and the latter
                  is an overlooked emergent concept
                </p>
              </div>
            </div>
            {/**Apparently smart */}
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-gray-700">Systems that think and act smart</h2>
              <div className="mt-2 dark:text-gray-600">
                <p>
                  At a time and age of artificial intelligence, the rise of intelligent
                  systems has been characterized by ever evolving things. from simple agentic workflows to complex 
                  multimodal systems, AI seems to be refining the systemic landscape across all domains
                </p>
              </div>
            </div>
      </div> 
    </PageWrapper>
  );
}
