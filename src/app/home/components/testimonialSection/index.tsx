"use client"
import React, { useRef } from 'react'
import TestimonyCard from './components/testimonyCard'
import { testimonialData } from './data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PrevIcon = () => <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
        <path d="M32 58.6668C46.7276 58.6668 58.6667 46.7278 58.6667 32.0002C58.6667 17.2726 46.7276 5.3335 32 5.3335C17.2724 5.3335 5.33334 17.2726 5.33334 32.0002C5.33334 46.7278 17.2724 58.6668 32 58.6668Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 21.3335L21.3333 32.0002L32 42.6668" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.6667 32H21.3333" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
</svg>

const NextIcon = () => <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58.6668C46.7276 58.6668 58.6666 46.7278 58.6666 32.0002C58.6666 17.2726 46.7276 5.3335 32 5.3335C17.2724 5.3335 5.33331 17.2726 5.33331 32.0002C5.33331 46.7278 17.2724 58.6668 32 58.6668Z" stroke="#054CD6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 42.6668L42.6667 32.0002L32 21.3335" stroke="#054CD6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.3333 32H42.6666" stroke="#054CD6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>


const TestimonialSection = () => {
    const swiperRef = useRef<any>();

    return (
        <section className={`relative w-full bg-[#F1F5FF]`}>
            <div className='container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-28 lg:pb-32 flex flex-col'>
                <h2 className="order-1 text-primary text-2xl md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight font-extrabold">
                    NoteOpX is loved by users
                </h2>

                <div className='order-3 md:order-2 mt-8 md:-mt-12 flex md:justify-end space-x-4'>
                    <button type='button' onClick={() => swiperRef.current.slidePrev()} className='focus:outline-none'>
                        <PrevIcon />
                    </button>
                    <button type='button' onClick={() => swiperRef.current.slideNext()} className='focus:outline-none'>
                        <NextIcon />
                    </button>
                </div>

                <div className='order-2 md:order-3 mt-12 lg:mt-16'>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 25
                            }
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {
                            testimonialData.map(data => <SwiperSlide key={data.id}>
                                <TestimonyCard
                                    image={data?.image}
                                    name={data?.name}
                                    role={data?.role}
                                    text={data?.text}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>


                </div>
            </div>
        </section>
    )
}

export default TestimonialSection