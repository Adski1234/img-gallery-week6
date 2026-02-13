import React, { useEffect, useState } from 'react';
import Image from './Image';

const Gallery = () => {
    const [images, setImages] = useState([]);

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
        
            return (
                <div className="gallery">
                    {images.length > 0 && 
                    images.map((image) => (
                        <Image key={image.id} title={image.title} src={image.url}  alt={image.alt}  />
                    ))} 
                </div>
            );
        };
        
export default Gallery;