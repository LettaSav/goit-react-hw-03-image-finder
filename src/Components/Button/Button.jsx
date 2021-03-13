import useStyles from './style';

const Button = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.Button}>
      Load more
    </button>
  );
};
export default Button;
