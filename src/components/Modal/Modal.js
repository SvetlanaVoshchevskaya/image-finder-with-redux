import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  state = {};

  modalRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handlePress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePress);
  }

  handlePress = event => {
    if (event.code !== "Escape") return;
    this.props.onClose();
  };

  handleClickBeckdrop = event => {
    const { current } = this.modalRef;
    if (current && event.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { largeIMG } = this.props;
    console.log(largeIMG);
    return (
      <div
        className={styles.overlay}
        ref={this.modalRef}
        onClick={this.handleClickBeckdrop}
        onKeyDown={() => {}}
      >
        <div className={styles.modal}>
          <img src={largeIMG} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  galleryArray: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
