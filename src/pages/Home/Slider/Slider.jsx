

const Slider = () => {

    const carouselText = <>
        <div className="absolute rounded-xl flex items-center  h-full left-0 right-5  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-8">
            <div className="ps-16">
                <h2 className="text-white font-bold text-4xl">DEDICATED TO THE SPORT <br /> OF MODEL AVIATION </h2>
            </div>
        </div>

    </>


    return (
        <div className="flex justify-center ">
            <div className="carousel w-11/12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/175005911/photo/balls-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=2rV297wFgSPu8Crvc_wQI_dCWJQxrW-QbEi8wep6Wgo=" className="w-full" />
                    {carouselText}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?w=2000" className="w-full" />
                    {carouselText}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/175005911/photo/balls-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=2rV297wFgSPu8Crvc_wQI_dCWJQxrW-QbEi8wep6Wgo=" className="w-full" />
                    {carouselText}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/371/535/small/enrl_5cib_160526.jpg" className="w-full" />
                    {carouselText}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;