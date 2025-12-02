import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800">On Murigu Gitonga...</h2>
        <div className="flex flex-col space-y-8 w-full">
          <div className="w-full flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-gray-700">Who I'm I ?</h1>
              <p className="mt-2 text-gray-700/90">
                  I am a computer scientist and programmer with diverse interests cutting across systems design
                  and development, human psychology and artificial intelligence.
                  My specialty is software systems development and my niche is multimodal artificial intelligence
              </p>
          </div>
          <hr className="font-thin text-gray-700/40 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Why I'm I ?</h3>
            <p className="dark:text-gray-700/90">
              With the advent of AI and other disruptive technologies,
              most organisations are torn between either what to use, why to use,
              and most importantly, how to integrate these technologies to harness 
              maximum value. I exist to help organisations navigate this complex landscape.
            </p>
          </div>
          <hr className="font-thin text-gray-700/40 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">What do I do ?</h3>
            <p className="dark:text-gray-600">
              My expertise trancends software development into real-world systems. I study, design, model and implement
              systems across a wide domain ranging from simple human-human interactions systems to more complex human-machine systems.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
