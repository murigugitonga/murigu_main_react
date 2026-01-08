import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {
  softEng,
  sysEng,
  sysEng2,
  AIFull,
  AITransp,
} from "../../assets/images";

export default function InitialCarousel() {
  const slides = [
    {
      image: sysEng,
      title: "Defense & Intelligence Systems",
      subtitle: "Resilient, AI-driven architectures for modern threats",
    },
    {
      image: AITransp,
      title: "Artificial Intelligence",
      subtitle: "Applied ML systems built for real-world impact",
    },
    {
      image: softEng,
      title: "Fintech Platforms",
      subtitle: "Secure, scalable financial infrastructure",
    },
    {
      image: AIFull,
      title: "Enterprise Engineering",
      subtitle: "High-availability systems at scale",
    },
    {
      image: sysEng2,
      title: "Cross-Domain Innovation",
      subtitle: "Bridging software, systems, and strategy",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="w-full flex items-center justify-center max-w-6xl mx-auto">
        {/* Size + clipping are controlled HERE */}
        <div className="relative h-[200px] md:h-[300px] overflow-hidden rounded-2xl">
          <Swiper
            modules={[EffectFade, Pagination, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            loop
            pagination={{ clickable: true }}
            className="w-full h-full pb-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  {/* Background image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/55" />

                  {/* Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-2xl px-6">
                      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination styling (inside reserved space) */}
          <style jsx global>{`
            .swiper-pagination {
              position: absolute;
              bottom: 0.75rem;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 0.5rem;
            }

            .swiper-pagination-bullet {
              width: 28px;
              height: 6px;
              border-radius: 9999px;
              background: rgba(0, 0, 0, 0.25);
              opacity: 1;
              transition: all 300ms ease;
            }

            .dark .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.25);
            }

            .swiper-pagination-bullet-active {
              background: #2563eb; /* blue-600 */
            }

            .dark .swiper-pagination-bullet-active {
              background: #60a5fa; /* blue-400 */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
