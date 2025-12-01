import { github } from "../assets/images";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
        <div className="relative flex flex-col space-y-8 w-full">
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
            <div className="flex items-center justify-center">
                <div className="flex flex-col space-y-3 p-2 rounded-lg border w-full max-w-72 border-gray-700">
                    <div className="flex flex-col space-y-3 text-gray-700">
                        <p>My software development projects are hosted on github</p>
                        <p>Feel free to visit and checkout my code repositories</p>
                    </div>
                    <a href="https://github.com/murigugitonga" target="_blank" className="flex border rounded-lg border-black items-center justify-center space-x-3 py-2.5">
                        <img src={github} className="w-6 h-6" alt="github logo" />
                        <span className="font-medium text-lg text-gray-700"> Github</span>
                    </a>
                </div>
            </div>
        </div>
      
    </PageWrapper>
  );
}
