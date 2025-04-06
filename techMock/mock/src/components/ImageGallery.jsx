import React, {useState} from "react";
const ImageGallery = () =>{
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        { id: 1, src: "https://dlcdnwebimgs.asus.com/gain/F12D7B4D-DC78-4228-8426-D2C474B7BD0D", alt: "Image 1" },
        { id: 2, src: "https://dlcdnwebimgs.asus.com/gain/7E4B6277-C5F1-4BEE-87E0-548530BA084B", alt: "Image 2" },
        { id: 3, src: "https://dlcdnwebimgs.asus.com/gain/A16F8224-F8F7-44F3-A1D5-A9A1AEC9F92D/w250", alt: "Image 3" },
    ];

    const handleItemClick = (imageSrc) =>{
        setSelectedImage(imageSrc);
    };
    return(
        <div>
            <div>
                {images.map((image)=>(
                    <button key = {image.id} onClick={()=> handleItemClick(image.src)}>
                        {image.alt}
                    </button>
                ))}
            </div>
            {
                selectedImage && (
                    <div>
                        <img src={selectedImage} alt='Selected'/>
                    </div>
                )
            }
        </div>
    )
}

export default ImageGallery;