import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">An Important piece...</h2>
        <div className="flex flex-col space-y-8 w-full">
          <div className="w-full flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">Why this?</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
                 I got into software engineering because I wanted to 
                 create products that would not only solve problems but also demonstrate how
                 powerful technology could be as a tool. My start was not a walk into the park. I started out as a lone ranger
                 and quickly realized that collective learning was an imperative ingredient for success in this career.
                 Over the years, I have had the privilege of working with some of the most talented and driven individuals across various industries, got to see problems 
                 and approaches to them in different dimensions and developed an ability to formulate solutions for seemingly existential problems.
                 The gratification is simply more than I could have asked for.
              </p>
          </div>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">A spotlight on current trends.</h3>
            <p className="text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
              There is an ongoing debate in the tech circles that with the emergence and rapid progress in artificial intelligence; software engineers will be redudant and thus not needed. That sentiment is both true and false in a sense. The truth exists in that
              AI will entirely re-define some traditional roles and quite inevitably, eradicate some. However, the falsehood lies in the fact that
              AI is still a tool that requires human oversight, creativity and problem-solving skills to be effectively utilized.
              Software Engineers will need to adapt and evolve their skill sets to work alongside AI technologies, focusing on areas such as AI integration to stay relevant.
              The same adaption will be required across all the conceivable industries as a well.
            </p>
          </div>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">A brief glimpse into the future.</h3>
            <p className="text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
              The last three years have seen rapid advancements in artificial intelligence
              and at this point, it is quite evident that it will only get better and more powerful. Most industries
              are at the infancy stages of adopting AI technologies, and I believe that the next decade will see a massive shift in how
              businesses operate, with AI playing a central role in driving innovation and efficiency.
              To stay relevant and competitive in the fast-shifting landscape, individuals and organisations will need to retool in ways that will both assimilate and accomodate
              the advancements as they happen.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
