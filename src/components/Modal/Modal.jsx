import style from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className={`${style.overlay} js_overlay`}>
        <div className={style.modal}>
          <img width={700} height={500} src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
  handleClickOverlay = evn => {
    if (!evn.target.classList.contains('js_overlay')) {
      return;
    }
    this.props.onClose();
  };

  handlePressKey = evn => {
    if (evn.key !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  componentDidMount() {
    document.documentElement.style.overflowY = 'hidden';
    window.addEventListener('click', this.handleClickOverlay);
    window.addEventListener('keydown', this.handlePressKey);
  }
  componentWillUnmount() {
    document.documentElement.style.overflowY = '';
    window.removeEventListener('click', this.handleClickOverlay);
    window.removeEventListener('keydown', this.handlePressKey);
  }
}
export default Modal;
