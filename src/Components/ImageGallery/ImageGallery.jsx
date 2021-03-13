import ImgItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import useStyles from './style';

const ImgGallery = ({ images, OpenModal }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ImageGallery}>
      {images.map(image => (
        <ImgItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          OpenModal={OpenModal}
          tags={image.tags}
        />
      ))}
    </ul>
  );
};

ImgGallery.propTypes = {
  images: PropTypes.array.isRequired,
  OpenModal: PropTypes.func.isRequired,
};
export default ImgGallery;
