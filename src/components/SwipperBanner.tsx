'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import type { SwiperBannerImages } from '@/types';

type Props = {
  swiperBannerImages: SwiperBannerImages[];
};

export default function SwipperBanner({ swiperBannerImages }: Props) {
  //swiper 播放邏輯：暫停與恢復
  const swiperRef = useRef<SwiperType | null>(null);
  const pauseSwiper = () => swiperRef.current?.autoplay.stop(); //暫停
  const resumeSwiper = () => swiperRef.current?.autoplay.start(); //恢復

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onMouseEnter={pauseSwiper}
      onMouseLeave={resumeSwiper}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={swiperBannerImages.length >= 2}
      onSlideChange={() => console.log('slide change')}
    >
      {swiperBannerImages.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[400px]">
            <div className="absolute left-0 top-0 w-full h-[400px]">
              <div className="w-full h-[400px] flex flex-col justify-center  gap-4">
                <p className="text-h3 md:text-h1 text-white text-center">{img.title}</p>
                <p className="text-h5 md:text-h4 text-white text-center">{img.content}</p>
              </div>
            </div>
            <img src={img.lg} alt={img.title} className="object-contain hidden sm:block" />
            <img src={img.md} alt={img.title} className="object-contain block sm:hidden" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // <Swiper
    //   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //   spaceBetween={0}
    //   slidesPerView={1}
    //   onSwiper={(swiper) => (swiperRef.current = swiper)}
    //   onMouseEnter={pauseSwiper}
    //   onMouseLeave={resumeSwiper}
    //   pagination={{ clickable: true }}
    //   autoplay={{ delay: 3000, disableOnInteraction: false }}
    //   loop={swiperBannerImages.length >= 2}
    //   className="w-full"
    // >
    //   {swiperBannerImages.map((img, i) => (
    //     <SwiperSlide key={i} className="relative w-full h-[400px]">
    //       <Image
    //         src={img.lg}
    //         alt={img.title}
    //         fill
    //         sizes="100vw"
    //         className="object-contain"
    //         priority={i === 0}
    //       />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
}
