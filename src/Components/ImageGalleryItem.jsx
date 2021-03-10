import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ImageGalleryItem: {
    borderRadius: 2,
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  },
  ImageGalleryItemImage: {
    width: '100 %',
    height: 260,
    objectFit: 'cover',
    transition: 'transform 250ms cubic - bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.03)',
      cursor: 'zoom-in',
    },
  },
});

const ImgItem = ({ webformatURL, id, OpenModal, largeImageURL, tags }) => {
  const classes = useStyles();
  return (
    <li className={classes.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        id={id}
        data-source={largeImageURL}
        onClick={OpenModal}
      />
    </li>
  );
};
export default ImgItem;
