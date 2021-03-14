import { useState } from 'react';
import useStyles from './style';
import PropTypes from 'prop-types';

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

SearchBarHandler.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBarHandler;
