import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import { imageData } from '../Data/Data';
import './Gallery.css';

const Gallery = ({ setCurrentPhotoAlbum }) => {
  const photoCards = imageData.map((imgData, index) => {
    return (
      <PhotoCard
        setCurrentPhotoAlbum={setCurrentPhotoAlbum}
        key={index + 1}
        testId={`photo-comment-${index + 1}`}
        {...imgData.photos[0]}
        {...imgData}
      />
    )
  })
  return (
    <section className="gallery-section">
      {photoCards}
    </section>
  )
}

export default Gallery;