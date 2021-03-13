import React, { useState, useEffect } from 'react';
import { MdStar } from 'react-icons/md';

const Images = (props) => {
  //console.log('Inside of Images component: ', props.theImages);
  useEffect(() => {
    const allGliders = document.querySelectorAll('.glider-images');
    allGliders.forEach(gliderSet => {
      new Glider(gliderSet, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true
      });
    });
  },[]);

  function handleClick(e) {
    //console.log(e);
    if ( e.target.style.color === '' ) {
      e.target.style.color = 'yellow';
      e.target.style.className = 'modal-close is-large';
      e.target.style.ariaLabel = 'close';
    } else {
      e.target.style.color = '';
    }
  }
  if(!props.theImages) { return null; }

  return (
    <div>
      <div className="glider-images">
      { props.theImages.photos.map((img, idx) => (
        <div key={img.url + "" + idx} className="card-image" style={{position: 'relative'}}>
          <figure className="image is-4by3">
            <img src={img.url} alt="" />
            <MdStar onClick={handleClick} size={30} color='white' style={{position: 'absolute', top: '0%', right: '0%'}}/>
          </figure>
        </div>
      ))}
      </div>
    </div>
  )
};

export default Images;