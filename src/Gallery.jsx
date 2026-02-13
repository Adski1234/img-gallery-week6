import React, { useEffect, useState } from 'react';
import Image from './Image';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
        fetch('https://week-6-api.vercel.app/api/images')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched images:', data);
                setImages(data);
            })

            .catch((error) => {
                console.error('Error fetching images:', error);
                setLoading(false);      
            });
            }, []);

            const nextImage = () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            };

                const prevImage = () => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                };

            return (
                <div className="gallery-container">
                    <div className="main-image-container">
                        {images.length > 0 && (
               <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}  />
                )}
                </div>


                    <div className="thumbnail-bar">
                         {images.map((image, index) => (
                                <img
                                key={image.id}
                                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                                src={image.url}
                                alt={image.alt}
                                onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>

                        <div className="arrows">
                            <button onClick={prevImage} className="arrow left-arrow">
                                {"<"}
                            </button>
                            <button onClick={nextImage} className="arrow right-arrow">
                                {">"}
                            </button>
                            </div>
                        </div>
            );
        };
        
                     
export default Gallery;