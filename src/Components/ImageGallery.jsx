import ImgItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ImageGallery: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

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
