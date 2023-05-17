import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard/GalleryCard";

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/gallery").then(res => res.json()).then(data => {
            setGallery(data);
        })
    }, [])
    return (
        <div className="my-20 w-[70%] mx-auto">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Toys Gallery</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    gallery.map(singleToy => <GalleryCard
                        key={singleToy.id}
                        singleToy={singleToy}
                    />)
                }
            </div>
        </div>
    );
};

export default Gallery;