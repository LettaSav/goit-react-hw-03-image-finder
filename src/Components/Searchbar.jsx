import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  SearchForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },

  SearchForm_button: {
    display: 'inline-block',
    width: 48,
    height: 48,
    border: 0,
    backgroundImage:
      "url('https://image.flaticon.com/icons/svg/149/149852.svg')",
    backgroundSize: '40%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',

    '&:hover': {
      opacity: 1,
    },
  },

  SearchForm_button_label: {
    position: ' absolute',
    width: 1,
    height: 1,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  },

  SearchForm_input: {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    fontSize: 20,
    border: 'none',
    outline: 'none',
    paddingLeft: 4,
    paddingRight: 4,

    '&::placeholder': {
      font: 'inherit',
      fontSize: 18,
    },
  },

  Searchbar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow:
      ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
});

const SearchBarHandler = ({ onSubmit }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchValue);
    setSearchValue('');
  };
  return (
    <header className={classes.Searchbar}>
      <form className={classes.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={classes.SearchForm_button}>
          <span className={classes.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={classes.SearchForm_input}
          type="text"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default SearchBarHandler;
