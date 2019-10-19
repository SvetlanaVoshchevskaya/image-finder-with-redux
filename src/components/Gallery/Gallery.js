import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import { openModal, closeModal } from '../../redux/action';
import Modal from '../Modal/Modal';
import styles from './Gallery.module.css';
import styled from '../PhotoCard/PhotoCard.module.css';

class Gallery extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    const { pictures } = this.props;
    if (prevProps.pictures !== pictures) {
      window.scrollTo(0, window.pageYOffset + 500);
    }
  }
  handleOpenModal = img => {
    const { modal, largeIMG } = this.props;
    this.props.openModal(modal, largeIMG);
  };

  render() {
    const { pictures, modal, largeIMG, closeModal, openModal } = this.props;

    return (
      <>
        {modal && <Modal largeIMG={largeIMG} onClose={() => closeModal()} />}
        <ul className={styles.gallery}>
          {pictures.map(picture => (
            <li key={picture.id} className={styled.galleryItem}>
              <PhotoCard
                webformatURL={picture.webformatURL}
                largeImageURL={picture.largeImageURL}
                openModal={() => openModal(picture.largeImageURL)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired
    })
  ).isRequired
};

const MSTP = state => ({
  pictures: state.galleryArray,
  isLoading: state.isLoading,
  isError: state.isError,
  modal: state.modal,
  largeIMG: state.largeIMG
});

const MDTP = dispatch => ({
  openModal: largeIMG => dispatch(openModal(largeIMG)),
  closeModal: () => dispatch(closeModal(false))
});

export default connect(
  MSTP,
  MDTP
)(Gallery);
