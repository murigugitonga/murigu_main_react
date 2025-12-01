import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-5 relative">
        <h2 className="text-2xl font-bold text-gray-800">On Murigu Gitonga;</h2>
        <div className="flex flex-col space-y-8 w-full">
          <div className="w-full flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-gray-700">Who I'm I ?</h1>
              <p className="mt-2 text-gray-700">
                  I am a computer scientist and programmer with one 
                  key driving goal - develop smart, scalable and performant
                  systems.
                  My main focal point in systems development is artifcial intelligence,
                  or rather systems that utilize the most of AI and other disruptive technologies have to offer.
              </p>
          </div>
          <hr className="font-thin text-blue-600 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Why I'm I ?</h3>
            <p className="dark:text-gray-600">
              New technologies are being churned out at astronomical rates. The need to stay relevant is 
              only starting to become palpable. Soon, discerning between what to 
              use and what not to will become an undeniable need.
            </p>
          </div>
          <hr className="font-thin text-blue-600 mx-6"/>
          <div className="w-full flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">What do I do ?</h3>
            <p className="dark:text-gray-600">
              My expertise trancends software development into real-world systems. I study, design, model and implement
              systems across a wide domain ranging from simple human-human systems to human-machine systems.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
