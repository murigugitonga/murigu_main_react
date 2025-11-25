import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
        <div className="w-full flex flex-col space-y-3 mt-4 relative">
            <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
            <p className="mt-2 text-gray-600">
                Welcome to my website. I am still developing this and I expect to be done in a short while.
                Bear with me :)
            </p>
        </div>
      
    </PageWrapper>
  );
}
