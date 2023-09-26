import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



const Banner = () => {
    // timer function start 
    const [days, setDays] = useState(null)
    const [hour, setHour] = useState(null)
    const [min, setMin] = useState(null)
    const [sec, setSec] = useState(null)
    function countdown(endDate) {
        let timer = setInterval(function () {
            const currentDate = new Date().getTime();
            const remainingTime = endDate - currentDate;
            if (remainingTime <= 0) {
                clearInterval(timer);
                return;
            }
            // Calculate the remaining time in hours, minutes, and seconds
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            setSec(seconds)
            setMin(minutes)
            setHour(hours)
            setDays(days)
        }, 1000);
    }
    const countdownEndDate = new Date('2023-12-30T00:00:00');
    countdown(countdownEndDate);

    // timer function end 

    const bannerText = <>
        <div data-aos="fade-left" className="absolute top-0 md:right-0 md:bottom-[10%] lg:w-1/2 lg:ps-20 lg:pt-10">

            <div className="mx-4">
                <h1 className="font-[poppins] text-[#40ABC7] font-bold text-xl md:text-2xl lg:text-5xl lg:mb-5 pt-20">Welcome <br /> To Car Toys Land</h1>
                <p className=" text-black text-sm md:text-base lg:text-lg font-semibold">We are Provide The Best Toy for your Child{"'"}s Smile. We are delivery smile with Toy. Get you{"'"}re unbeatable experience with our awesome toys</p>
                <h2 className="font-bold text-black pt-2 lg:pt-10 pb-0 md:pb-2 lg:pb-4 text-lg md:text-xl lg:text-2xl">To Get 20% Discount Shop Now, <br /> Offer Expires on.. </h2>
            </div>

            <div data-aos="flip-down" className="grid grid-flow-col gap-5 text-center auto-cols-max mx-4 pb-2 lg:pb-10">
                <div className="flex flex-col p-2 bg-[#40ABC7] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-xl lg:text-5xl">
                        <span style={{ "--value": days }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-xl lg:text-5xl">
                        <span style={{ "--value": hour }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-[#40ABC7] rounded-box text-neutral-content">
                    <span className="countdown font-mono text-xl lg:text-5xl">
                        <span style={{ "--value": min }}></span>
                    </span>
                    min
                </div>
                <div className="sm: hidden lg:flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-xl lg:text-5xl">
                        <span style={{ "--value": sec }}></span>
                    </span>
                    sec
                </div>
            </div>
            <div className="mx-4 lg:mx-2">
                <Link to='/allToys'><button className="mb-10 btn btn-primary text-white lg:font-bold lg:w-2/5 ">Shop Now <FaArrowRight className="ms-2"></FaArrowRight></button></Link>
            </div>
        </div>
    </>
    return (
        <div className="mb-14">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img className="h-96 lg:h-full" src="https://i.ibb.co/hg1S8dn/slider2-bg-1.png" />
                        {bannerText}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="h-96 lg:h-full" src="https://i.ibb.co/hg1S8dn/slider2-bg-1.png" />
                        {bannerText}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="h-96 lg:h-full" src="https://i.ibb.co/hg1S8dn/slider2-bg-1.png" />
                        {bannerText}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

