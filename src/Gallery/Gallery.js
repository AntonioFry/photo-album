import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import { imageData } from '../Data/Data';

const Gallery = () => {
  const photoCards = imageData.map(imgData => {
    return (
      <PhotoCard 
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