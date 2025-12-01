import AiSect from "../components/home/AI";
import SoftwareEng from "../components/home/SoftwareDev";
import SystemsEng from "../components/home/SysEng";
//import Carousel from "../components/home/Hero";
import PageWrapper from "../components/PageWrapper";


export default function Home() {
  return (
    <PageWrapper>
      <div className="relative w-full flex flex-col space-y-5">
            {/**AI section */}
            <div className="flex flex-col space-y-4">
                <AiSect/>
            </div>
            <div className="flex flex-col space-y-4">
                <SystemsEng/>
            </div>
            <div className="flex flex-col space-y-4">
              <SoftwareEng/>
            </div>
      </div> 
    </PageWrapper>
  );
}
