import AOS from 'aos';
import 'aos/dist/aos.css';
const GalleryCard = ({singleToy}) => {
    const {name,image} = singleToy;
    AOS.init();
    return (
        <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <figure><img src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default GalleryCard;