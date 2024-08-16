'use client'

import { sliderData } from '#static/data'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import { Autoplay, Keyboard, Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

const Slider = () => {
   const swiperOptions: SwiperOptions = {
      modules: [Autoplay, Keyboard, Navigation],
      slidesPerView: 3,
      loop: true,
      speed: 1800,
      centeredSlides: true,
      observeParents: true,
      observer: true,
      navigation: {
         nextEl: '.next-arrow',
         prevEl: '.prev-arrow',
         enabled: true,
      },
      autoplay: {
         delay: 4000,
         disableOnInteraction: true,
      },
      keyboard: {
         enabled: true,
      },
   }

   return (
      <div
         className={`relative z-[4] h-full py-32 before:absolute before:inset-0 before:animate-k-glow before:bg-[url('/img/glow.png')] before:bg-cover before:bg-center before:bg-no-repeat`}
      >
         <Swiper className={`h-full !overflow-visible ease-cBezier`} {...swiperOptions}>
            {sliderData.map((item) => {
               return (
                  <SwiperSlide className={`group h-full`} key={item.id}>
                     <div
                        className={`after:w-[7.5rem h-[calc(100vh-240px)] scale-75 text-center opacity-25 !transition-all !duration-[1.8s] after:absolute after:bottom-[5px] after:left-[calc(50%-3.75rem)] after:h-0 after:shadow-[0_0_45px_10px_#010101] group-[&.swiper-slide-active]:scale-[.95] group-[&.swiper-slide-active]:opacity-80`}
                     >
                        <div
                           className={`image-wrapper [&>*]:absolute [&>*]:h-full [&>*]:w-full [&>*]:perspective-[150px] [&>*]:transform-style-3d`}
                        >
                           <div
                              className={`leftSide animate-[k-left-side_2s_ease-in-out_infinite_alternate] will-change-transform perspective-origin-[left_center]`}
                              style={{
                                 clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                              }}
                           >
                              <div
                                 className={`slider-image absolute h-full w-full bg-contain bg-center bg-no-repeat`}
                                 style={{ backgroundImage: `url("${item.image}")` }}
                              ></div>
                           </div>
                           <div
                              className={`rightSide -ml-[.55px] animate-[k-right-side_2s_ease-in-out_infinite_alternate] will-change-transform perspective-origin-[right_center]`}
                              style={{
                                 clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                              }}
                           >
                              <div
                                 className={`slider-image absolute h-full w-full bg-contain bg-center bg-no-repeat`}
                                 style={{ backgroundImage: `url(${item.image})` }}
                              ></div>
                           </div>
                        </div>
                        <p
                           className={`pointer-events-none absolute -bottom-[85px] w-full text-[32px] drop-shadow-[0_0_10px_rbg(58_78_94)]`}
                        >
                           {item.text}
                        </p>
                     </div>
                  </SwiperSlide>
               )
            })}
         </Swiper>
         <div
            className={`navigation swiper-navigation absolute inset-0 z-[4] overflow-hidden [&>*]:absolute [&>*]:top-1/2 [&>*]:before:absolute [&>*]:before:text-[42px] [&>*]:before:content-['?']`}
         >
            <div
               className={`prev-arrow left-[3.125rem] cursor-pointer before:-rotate-90 before:opacity-50 before:duration-[.5s] hover:before:scale-125 hover:before:opacity-80`}
            ></div>
            <div
               className={`next-arrow right-[50px] cursor-pointer before:right-0 before:rotate-90 before:opacity-50 before:duration-[.5s] hover:before:scale-125 hover:before:opacity-80`}
            ></div>
         </div>
      </div>
   )
}

export default Slider
