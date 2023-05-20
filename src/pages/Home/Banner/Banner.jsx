import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './banner.css'

const Banner = () => {
    // timer function start 
     const [ days , setDays ] = useState(null)
     const [ hour , setHour ] = useState(null)
     const [ min , setMin ] = useState(null)
     const [ sec , setSec ] = useState(null)
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
    const countdownEndDate = new Date('2023-06-30T00:00:00');
    countdown(countdownEndDate);

    // timer function end 


    return (
        <div className="hero lg:min-h-screen sm:image-full rounded-2xl" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slider2-bg.jpg?v=1613719740")` }}>
            <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
            <div className="hero-content">
                <div className="sm:w-0 lg:w-1/2"></div>
                <div data-aos="fade-left" className="sm:w-0 lg:w-1/2">
                    <h1 className="title text-[#DB005B]">Welcome <br /> To Car Toys Land</h1>
                    <p className="banner-text text-black">We are Provide The Best Toy for your Child's Smile . We are delivery smile with Toy .Get you're unbeatable experience with our awesome toys</p>
                    {/* Timer  start  */}
                    <h2 className="discount-title text-black ">To Get 20% Discount Shop Now, <br /> Offer Expires on.. </h2>
                    <div data-aos="flip-down" className="grid grid-flow-col gap-5 text-center auto-cols-max pb-10">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": days }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": hour }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": min }}></span>
                            </span>
                            min
                        </div>
                        <div className="sm: hidden lg:flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": sec }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    {/* Timer end */}
                    <Link to='/allToys'><button className="mb-10 btn btn-primary text-white font-bold lg:w-2/5 ">Shop Now <FaArrowRight className="ms-2"></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
