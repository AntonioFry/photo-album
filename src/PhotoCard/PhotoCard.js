import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photoDescription, imageSrc, photoComment }) => {
  return (
    <article class='photo-card'>
      <img class='taken-photo' src={imageSrc} alt={photoDescription} />
      <div className='photo-comment-container'>
        <p class='photo-comment'>{photoComment}</p>
      </div>
    </article>
  )
}

export default PhotoCard;