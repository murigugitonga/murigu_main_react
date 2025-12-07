import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800">On Murigu Gitonga...</h2>
        <div className="flex flex-col space-y-8 w-full">
          <div className="w-full flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-gray-700">Who I'm I ?</h1>
              <p className="mt-2 text-gray-700/90 text-sm">
                  I am a computer scientist, systems engineer and software developer skilled in designing,
                  developing and implementing complex systems across various domains. My niche sits at the
                  intersection of software, Artificial Intelligence and systems engineering, delivering
                  solutions wherever technology meets real-world challenges.
              </p>
          </div>
          <hr className="font-thin text-gray-700/40 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Why I'm I ?</h3>
            <p className="dark:text-gray-700/90 text-sm">
              I am driven by the ever present challenge of transforming ideas into effective solutions.
              I optimize software, design intelligent systems and solve operational problems that are
              characteristic of modern systems.
            </p>
          </div>
          <hr className="font-thin text-gray-700/40 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">What do I do ?</h3>
            <p className="text-gray-700/90 dark:text-gray-300/60 text-sm">
              I architect and develop scalable software and systems, implement artificial Intelligence
              and data-driven models, inspire the next generation of intelligent systems and deliver
              integrated solutions tailored for problems plaguing domains spanning from defence and intelligence
              to fintech and enterprise systems.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
