import useStyles from './style';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.Button}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
