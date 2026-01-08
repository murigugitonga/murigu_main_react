import AiSect from "../components/home/AI";
import SoftwareEng from "../components/home/SoftwareDev";
import SystemsEng from "../components/home/SysEng";
import PageWrapper from "../components/PageWrapper";
//import Carousel from "../components/home/Carousel";


export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full space-y-10">
            <div className="relative flex items-center justify-center h-24 flex-col bg-inherit">
                <span className="text-3xl text-center text-gray-800 leading-snug bg-inherit dark:text-gray-50">Developing Advanced Capabilities for Next-Gen Problems</span>
                {/* <Carousel/> */}
            </div>
             <hr className="mx-6 font-thin text-gray-700/40 dark:text-gray-500"/>
            {/**AI section */}
            <div className="flex flex-col space-y-4">
                <AiSect/>
            </div>
            <hr className="mx-6 font-thin text-gray-700/40 dark:text-gray-500"/>
            <div className="flex flex-col space-y-4">
                <SystemsEng/>
            </div>
            <hr className="mx-6 font-thin text-gray-700/40 dark:text-gray-500"/>
            <div className="flex flex-col space-y-4">
              <SoftwareEng/>
            </div>
      </div> 
    </PageWrapper>
  );
}
