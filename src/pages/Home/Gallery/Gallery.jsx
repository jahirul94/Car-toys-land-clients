import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch('https://assignment-eleven-server-rose.vercel.app/toysPictures')
            .then(res => res.json())
            .then(data => setPictures(data))
    }, [])

    return (
        <div className="shadow-lg shadow-slate-400 py-4 rounded-lg border border-gray-300">
            <div className="text-center py-4">
                <h2 className="text-4xl font-bold"> Featured Products </h2>
            </div>
            <Marquee pauseOnHover className="py-10">
                {
                    pictures?.map(picture =><div key={picture._id}>
                        <img className="h-96 w-96 me-4 rounded-xl" src = { picture.toysPicture } alt="" />
                    </div>)
                }

            </Marquee>
        </div>
    );
};

export default Gallery;