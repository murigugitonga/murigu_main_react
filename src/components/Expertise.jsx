import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Skillset(){
    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable : true}}
            autoplay = {{delay: 3000}}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <h3>Artificial Intelligence</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Software Development</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Systems Design</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Systems architecture</h3>
            </SwiperSlide>
        </Swiper>
    )
        
    
}