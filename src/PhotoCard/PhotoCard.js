import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photoDescription, imageSrc, photoComment, testId, photos, albumName }) => {
  const backgroundImage = {
    'backgroundImage': `url(${imageSrc})`,
    'backgroundSize': 'cover',
  };
  return (
    <article className='photo-card' style={backgroundImage}>
      <div className='photo-comment-container'>
        <p data-testid={testId} className='photo-comment'>{photoComment}</p>
        <h2 className="album-name">{albumName}</h2>
      </div>
    </article>
  )
}

export default PhotoCard;