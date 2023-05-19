

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen sm:image-full rounded-2xl" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0475/2385/6541/files/slider2-bg.jpg?v=1613719740")` }}>
            <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
            <div className="hero-content">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <h1 className="font-bold text-[#ff4f3b] mb-5 sm:text-xl lg:text-7xl  ">Welcome To Car Toy Land</h1>
                    <p className="mb-5 font-semibold sm:text-xs lg:text-xl pb-28">We are Provide The Best Toy for your Child's Smile . We are delivery smile with Toy .Get you're unbeatable experience with our awesome toys</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
