const GalleryCard = ({singleToy}) => {
    const {name,image} = singleToy;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            {/* <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div> */}
        </div>
    );
};

export default GalleryCard;