import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
        <div className="mt-4 flex flex-col space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
            <div className="flex flex-col space-y-3 p-2 rounded-lg border border-gray-800">
                <div className="text-gray-700">
                    <p>My Projects are hosted on github</p>
                    <p>Feel free to visit and checkout some of my repositories</p>
                </div>
                <a href="#" className="flex border rounded-lg border-black items-center justify-center space-x-3 py-2.5">
                    <img src="src/assets/images/github.png" className="w-6 h-6" alt="" />
                    <span className="font-medium text-lg text-gray-700"> Github</span>
                </a>
            </div>
        </div>
      
    </PageWrapper>
  );
}
