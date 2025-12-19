import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800">On Murigu Gitonga...</h2>
        <div className="flex flex-col space-y-8 w-full">
          <div className="w-full flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-gray-800/80">Who I'm I ?</h1>
              <p className="mt-2 text-gray-500 text-sm">
                  I am a computer scientist, systems engineer and software developer skilled in designing,
                  developing and implementing complex systems across various domains. My niche sits at the
                  intersection of software, artificial intelligence and systems engineering, delivering
                  solutions wherever technology meets real-world challenges.
              </p>
          </div>
  
          <hr className="font-thin text-gray-700/ mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80">Why I'm I ?</h3>
            <p className="text-gray-500 text-sm">
              I am a computer scientist because most of my research work directly abstracts from computer science
              fundamentals (in concept and in application). I am a software engineer because I derive satisfaction from directly translating 
              concepts into implementable products and I am a systems engineer because the latter can only effectively succeed with the application of systems engineering.
            </p>
          </div>
          <hr className="font-thin text-gray-700 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80">What do I do ?</h3>
            <p className="text-gray-500 text-sm">
              My work description is designing, architecting and implementing scalable software and (yes,and, not or) systems, leveraging artificial Intelligence
              and other disruptive technologies (quantum & cloud computing and IoT), inspiring the next generation of intelligent systems and delivering
              integrated solutions tailored to address problems specific to domains specified above.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
