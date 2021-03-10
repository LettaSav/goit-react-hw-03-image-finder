import axios from 'axios';

const fetchImg = (
  value,
  currentPage,
  key = '20574962-fae88d1428d1c6feddadf1258',
) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${value}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);
};

export default fetchImg;
