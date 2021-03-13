import useStyles from './style';

const ImgItem = ({ webformatURL, OpenModal, largeImageURL, tags }) => {
  const classes = useStyles();
  return (
    <li className={classes.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        data-source={largeImageURL}
        onClick={OpenModal}
      />
    </li>
  );
};
export default ImgItem;