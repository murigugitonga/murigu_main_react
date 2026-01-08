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
                 I first got into software engineering because I wanted to 
                 create products that would not only solve problems but also demonstrate how
                 powerful technology could be as a tool. My start, like most engineers was anything but smooth. My first internship was a complete flop. After that, I took a long break from the industry to build a solid foundation at my own pace. 
                 and quickly realized that collective learning was an imperative ingredient for success in this career. While at software engineering, I had my eyes opened to
                 the wider fields that shadow it, computer science as the all-encompassing field and systems engineering, a religious guide for developing and maintaing modern systems. I came to a realisation that
                 to unleash the full flavor and power of this, one had to master both.
                 Over the years, I have had the privilege of working with some of the most talented and driven individuals across various industries, got to see problems 
                 and approaches to them in different dimensions and developed an ability to formulate solutions for seemingly existential problems.
                 The gratification is simply more than I could have asked for.
              </p>
          </div>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">A spotlight on current trends.</h3>
            <p className="text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
              AI development has in the recent past, triggered a lot of debates, key among them being the possibility
              of AI taking over workplaces as it advances. There is justified fear in this.
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
              The last three years have seen rapid advancements in artificial intelligence, especially in the fields of deep learning, Natural language proccesing and the ubiquitous Large Language Models. LLMs such as OpenAI's GPT-3 and Google's Gemini
              have crossed a certain threshold that surpasses an average human's reasoning. 
              At this point, it is quite evident that these models will only get better and more powerful. I like seeing them as precursors to the much-hyped AGI. Some consider them to be early forms of AGI. Most industries
              are at the infancy stages of adopting AI technologies, and I believe that the next decade will witness a massive shift in how
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
