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
                 powerful technology could be as a tool. I took a personal sabbatical from the active industry to build a solid foundation at my own pace.
                 While at software engineering, I have had my eyes opened to
                 the wider fields that shadow it and their relevance. Computer science as the all-encompassing field and systems engineering, a religious guide for developing and maintaing reliable modern systems. I have come to a realisation that
                 mastering these crucial fields unlocks a deeper understanding of how technology works and how to leverage it effectively.
                 Over the last couple of years, I have had the privilege of meeting and working with some of the most talented and driven individuals across various industries, got to see problems 
                 and approaches to them in different dimensions and developed an ability to formulate solutions for seemingly inextricable problems.
                 The gratification is simply more than I could have asked for.
              </p>
          </div>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">A spotlight on current trends.</h3>
            <p className="text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
              AI development has in the recent past, triggered a lot of debates, key among them being the possibility
              of AI taking over workplaces as it advances. There is justified fear in this. AI is here to re-define our way of life and in its wake, reshaping the global industrial complex.
              The harsh truth is that the revolution will entirely re-define some traditional roles and quite inevitably, eradicate some. However, a key point lies in the fact that
              AI is still a tool that requires human oversight, creativity and problem-solving skills to be effectively utilized. I believe there is a place for individuals who will suitably retool themselves to work alongside AI.
            </p>
          </div>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800/80 dark:text-gray-200">A brief glimpse into the future.</h3>
            <p className="text-gray-500 dark:text-gray-300/70 text-sm leading-relaxed max-w-prose">
              The last three years have seen rapid advancements in artificial intelligence, notably in the field of machine learning and deep learning. Ubiquitous Large Language Models such as OpenAI's GPT-3 and Google's Gemini
              have recently crossed a threshold that surpasses an average human's reasoning and now form the backbone of a fast evolving technological world order. Going by the amount of effort and investment major tech companies are pouring into 
              the effort to further advance AI capabilities, it is clear that we are only at the dawn of this revolution.
              That also serves as a sufficient indicator that these models will only get better and more powerful. I like seeing them as precursors to the much-hyped AGI. Some(rightfully) consider them to be early forms of AGI. Most industries
              are at the infancy stages of adopting AI technologies, and I believe that the next decade will witness a radical shift in how
              businesses operate, with AI playing a central role in driving innovation and efficiency. Industries and organisations will all need to adapt in a way that allows seemless integration of AI technologies into their existing workflows and systems.
              The future belongs to those that will adapt. Now is the time to lay a solid foundation.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
