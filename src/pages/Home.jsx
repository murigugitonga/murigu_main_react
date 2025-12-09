import AiSect from "../components/home/AI";
//import FadeCarousel from "../components/home/Hero";
import SoftwareEng from "../components/home/SoftwareDev";
import SystemsEng from "../components/home/SysEng";
//import Carousel from "../components/home/Hero";
import PageWrapper from "../components/PageWrapper";


export default function Home() {
  return (
    <PageWrapper>
      <div className="relative flex flex-col w-full space-y-10">
            <div className="flex items-center justify-center flex-col h-48 bg-black">
                <span className="text-3xl text-center text-gray-100 font-bold">Developing Next Generation Capabilities for Next Generation Problems</span>
                {/* <Carousel/> */}
            </div>
             <hr className="mx-6 font-thin text-gray-700/40"/>
            {/**AI section */}
            <div className="flex flex-col space-y-4">
                <AiSect/>
            </div>
            <hr className="mx-6 font-thin text-gray-700/40"/>
            <div className="flex flex-col space-y-4">
                <SystemsEng/>
            </div>
            <hr className="mx-6 font-thin text-gray-700/40"/>
            <div className="flex flex-col space-y-4">
              <SoftwareEng/>
            </div>
      </div> 
    </PageWrapper>
  );
}
