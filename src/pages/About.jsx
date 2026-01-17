import AboutSection from "../components/about/AboutSection";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">An Important piece...</h2>
        <div className="flex flex-col space-y-8 w-full">
          <AboutSection title="Why this?">
            <p>
              I first got into software engineering because I wanted to create products
              that would not only solve problems but also demonstrate how powerful and effective
              technology could be as a tool.
            </p>
            <p>
              While studying software engineering, my eyes were opened to the wider
              fields that shadow it and their relevance.
              <strong className="font-medium text-gray-700 dark:text-gray-200">
                {" "}Computer science{" "}
              </strong>
              as the all-encompassing discipline and
              <strong className="font-medium text-gray-700 dark:text-gray-200">
                {" "}systems engineering{" "}
              </strong>
              as a guiding philosophy for building reliable modern systems.
            </p>
            <p>
              Over the last couple of years, I have met, interacted and worked with talented individuals
              across various industries, learned to view problems from multiple dimensions
              and developed the ability to formulate solutions for seemingly
              inextricable challenges. The gratification is simply more than I could have asked for.
            </p>
          </AboutSection>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <AboutSection title="A spotlight on current trends.">
            <p>
              Advancements in the field of artificial intelligence have in the recent past, triggered a lot of debates, key among them being the possibility
              of AI taking over workplaces as it advances. Experts have aptly christened this as the <strong>AI revolution</strong>. There is palpable, unspoken fear in this. AI is here to re-define our way of life and in its wake, is heavily reshaping the global industrial complex.
            </p>
            <p>
              The harsh truth is that the revolution will entirely re-define some traditional roles and quite inevitably, eradicate some. However, an important point lies in the fact that
              AI is still a tool that requires human oversight, creativity and problem-solving skills to be effectively utilized. I believe there is a place for individuals who will adapt by suitably retooling their skillsets to work alongside AI.
            </p>
          </AboutSection>
          <hr className="font-thin text-gray-700/40 dark:text-gray-500 mx-6"/>
          <AboutSection title="A brief glimpse into the future.">
            <p>
              The last three years have seen rapid advancements in artificial intelligence, notably in the field of machine learning and deep learning. Ubiquitous large language models such as OpenAI's GPT-5 and Google's Gemini
              have recently crossed a threshold that surpasses an average human's reasoning and now form the backbone of a fast evolving technological world order. Going by the amount of effort and investment major tech companies are pouring into 
              the effort to further advance AI capabilities, it is clear that we are only at the dawn of this revolution.
            </p>
            <p>
              That also serves as a sufficient indicator that these models will only get better and more powerful. I like thinking of them as precursors to the much-hyped AGI. Some(rightfully) consider them to be early forms of AGI. Most industries
              are at the infancy stages of adopting AI technologies, and I believe that the next decade will witness a radical shift in how
              businesses operate, with AI playing a central role in driving innovation and efficiency.
            </p>
            <p>
              Industries and organisations will all need to adapt in a way that allows seemless integration of AI technologies into their existing workflows and systems.
              The future belongs to those who are willing to adapt. Now is the time to lay a solid foundation.
            </p>
          </AboutSection>
        </div>
      </div>
    </PageWrapper>
  );
}
