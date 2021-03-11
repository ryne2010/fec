/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// helpers
// import ImageMap from '../helpers/imageMap';
// import ImageModal from '../helpers/imageModal';

const Image = (focus) => {
  // const { styles } = focus; // need?
  const { current } = focus; // [ {...} ] state. dont use

  // const [state, setState] = useState({});
  const [photoSet, setPhotos] = useState([]);
  // const [currentStyle, setCurrentStyle] = useState({});// photoObject = {url: , thumbnail_url};
  // ImageModal(options/photos, current) -> returns image render, state, setState
  const [currentPhoto, setCurrentPhoto] = useState({}); //current[0]);

  const [modal, setActive] = useState('');
  // const active = modal ? 'is-active' : '';
  // const toggle = () => {
  //   setActive(active);
  //   console.log(active);
  // };

  // EFFECTS to rerender
  // on load
  useEffect(() => {
    setPhotos(current);
  }, [focus.current]);

  // useEffect(() => {
  //   setCurrentStyle(styles);
  // }, [focus.styles]);

  useEffect(() => {
    setCurrentPhoto(current[0]);
  }, [focus.current]);

  // useEffect(() => {
  //   setCurrentPhoto(current[0]);
  // }, [focus.current]);


  const open = () => {
    setActive('is-active');
    // toggle();
    // console.log(modal);
  };
  const close = () => {
    setActive('');
    // toggle();
    // console.log(modal);
  };

  // click handler to change the view from thumbnail selection
  const change = (e) => {
    e.persist();
    const thumb = e.target.src;
    const u = e.target.alt;
    const newFocus = {
      thumbnail_url: thumb,
      url: u,
    };
    setCurrentPhoto(newFocus);
  };
  // useEffect(() => {
  //   setState(current);
  // });

  // const showImage = () => {
  //   if(!currentPhoto)
  // }

  // // change current image focus on prop change
  // useEffect(() => {
  //   setState(current);
  //   // setActive(modal);
  // }, [current]);

  // modal functionality needs to be attached to a click listener
  // TODO:modal doesn't work for the images that have wider ratios...works for all vertical images
  return (
    <div>
      <div className={`modal ${modal}`}>
        <div className="modal-content">
          <div className="iframe-container is-fluid">
            <iframe
              className="iframe"
              title="focus"
              // src={currentPhoto.url}
              // alt={currentPhoto.thumbnail_url}
            />
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={() => close()}
          type="button"
          aria-label="close"
        />
      </div>
      <div className="tile is-parent is-vertical-center">
        <figure className="image is-fullwidth">
          <img
            className="is-fullwidth"
            src={currentPhoto.url}
            alt={currentPhoto.thumbnail_url}
            onClick={(e) => open(e)}
          />
          <div className="tile is-child is-overlay is-vertical-center">
            <div className="tile is-vertical">
              {/* <div className="tile is-4" /> */}
              {photoSet && photoSet.map((item) => (
                <figure className="image is-32x32" key={item.thumbnail_url}>
                  <img
                    className="is-square"
                    src={item.thumbnail_url}
                    alt={item.url}
                    onClick={(e) => change(e)}
                  />
                </figure>
              ))}
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Image;
