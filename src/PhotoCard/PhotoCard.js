import React from 'react';

const PhotoCard = ({ photoDescription, imageSrc, photoComment }) => {
  return (
    <article>
      <img src={imageSrc} alt={photoDescription} />
      <p>{photoComment}</p>
    </article>
  )
}

export default PhotoCard;