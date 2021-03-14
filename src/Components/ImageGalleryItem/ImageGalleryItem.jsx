import useStyles from './style';
import PropTypes from 'prop-types';

const ImgItem = ({ webformatURL, OpenModal, largeImageURL, tags }) => {
  const classes = useStyles();
  return (
    <li className={classes.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={classes.ImageGalleryItemImage}
        data-source={largeImageURL}
        onClick={OpenModal}
      />
    </li>
  );
};
export default ImgItem;

ImgItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  OpenModal: PropTypes.func.isRequired,
};
