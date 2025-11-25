import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
        <div className="w-full flex flex-col space-y-3 mt-4 relative">
            <h1 className="text-3xl font-bold text-gray-800">About Myself</h1>
            <p className="mt-2 dark:text-gray-600">
                I am a computer scientist and programmer with one 
                key driving goal - develop smart, scalable and performant
                systems.
                My main focal point in systems development is artifcial intelligence,
                or rather systems that utilize the most of AI and other disruptive technologies have to offer.
            </p>
        </div>
      
    </PageWrapper>
  );
}
