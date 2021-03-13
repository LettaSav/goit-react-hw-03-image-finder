import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Button: {
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
    backgroundColor: '#3f51b5',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center',
    display: 'inline-block',
    color: '#fff',
    border: 0,
    textDecoration: 'none',
    cursor: 'pointer',

    width: 150,
    boxShadow:
      ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2) 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

    '&:hover': {
      backgroundColor: '#303f9f',
    },
    '&:focus': {
      backgroundColor: '#303f9f',
    },
  },
});

export default useStyles;
