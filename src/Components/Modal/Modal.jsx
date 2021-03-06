import { createUseStyles } from 'react-jss';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  Overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  Modal: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
});

const modalRoot = document.querySelector('#modal-root');

const ModalHandler = ({ largeImageURL }) => {
  const classes = useStyles();

  return createPortal(
    <div className={classes.Overlay}>
      <div className={classes.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalHandler;

ModalHandler.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
