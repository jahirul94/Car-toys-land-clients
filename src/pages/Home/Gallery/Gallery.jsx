import { useEffect, useState } from "react";

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
                <h2 className="text-4xl font-bold mb-2">Dream Drive Showcase</h2>
                <p className="text-lg font-medium mb-6">Explore our available products gallery</p>
            </div>
            <div className="grid gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    pictures?.map(picture => <div data-aos="zoom-in" key={picture._id}>
                        <img className="h-80 w-full rounded-xl" src={picture.toysPicture} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;