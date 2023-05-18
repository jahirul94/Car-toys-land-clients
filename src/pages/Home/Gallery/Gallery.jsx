import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="shadow-2xl bg-slate-300 py-4 rounded-2xl">
             <div className="text-center py-4">
                 <h2 className="text-4xl font-bold"> Explore Our Products </h2>
             </div>
            <Marquee className="py-10">
                   <img className="h-96 w-96" src="https://m.media-amazon.com/images/I/91oxSXgVD6L.jpg" alt="" />

                   <img className="h-96 w-96" src="https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-gm-master-catalog/default/dwe7bee909/images/large/1232016486_1.JPG?sw=900&sh=900" alt="" />

                   <img className="h-96 w-96" src="https://cdn.shopify.com/s/files/1/2009/1313/products/12772_800x.jpg?v=1612794528" alt="" />

                   <img className="h-96 w-96" src="https://m.media-amazon.com/images/I/91oxSXgVD6L.jpg" alt="" />

                   <img className="h-96 w-96" src="https://m.media-amazon.com/images/I/71jq6iSVUSL._SX522_.jpg" alt="" />

                   <img className="h-96 w-96" src="https://i.ytimg.com/vi/pib8H3CKaSI/maxresdefault.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default Gallery;