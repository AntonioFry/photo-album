import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ imageSrc, photoComment, testId, photos, albumName, setCurrentPhotoAlbum }) => {
  const backgroundImage = {
    'backgroundImage': `url(${imageSrc})`,
    'backgroundSize': 'cover',
  };
  return (
    <article className='photo-card' style={backgroundImage}>
      <div className='photo-comment-container'>
        <p data-testid={testId} className='photo-comment'>{photoComment}</p>
        <div className="photo-card-btn-container">
          <button onClick={() => setCurrentPhotoAlbum(photos)} className="album-name-btn">{albumName}</button>
        </div>
      </div>
    </article>
  )
}

export default PhotoCard;