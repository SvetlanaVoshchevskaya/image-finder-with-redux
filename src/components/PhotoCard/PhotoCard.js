import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ largeImageURL, webformatURL, openModal }) => (
  <div className={styles.photoCard}>
        <img src={webformatURL} alt="" />
        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={() => openModal(largeImageURL)}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
);

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired
};

export default PhotoCard;
