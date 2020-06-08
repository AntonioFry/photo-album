import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photoDescription, imageSrc, photoComment }) => {
  console.log(imageSrc);
  const backgroundImage = {
    'backgroundImage': `url(${imageSrc})`,
    'backgroundSize': 'cover',
  };
  return (
    <article class='photo-card' style={backgroundImage}>
      <div className='photo-comment-container'>
        <p className='photo-comment'>{photoComment}</p>
      </div>
    </article>
  )
}

export default PhotoCard;