import { useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';

import SearchBarHandler from './Components/SearchBar/Searchbar';
import ImgGallery from './Components/ImageGallery/ImageGallery';
import fetchImg from './services/ImgApi';
import Modal from './Components/Modal/Modal';

import Button from './Components/Button/Button';

function App() {
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = searchValue => {
    setQuery(searchValue);
    setCurrentPage(1);
    setImages([]);
  };
  const currentPageHandler = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    setIsLoading(true);

    fetchImg(query, currentPage)
      .then(({ hits }) => setImages(hits))
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      )
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    fetchImg(query, currentPage)
      .then(({ hits }) => setImages(prevState => [...prevState, ...hits]))
      .then(() => {
        if (currentPage !== 1) {
          scroll();
        }
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      )
      .finally(() => setIsLoading(false));
  }, [query, currentPage]);

  function handleCancelModal(e) {
    if (e.keyCode === 27) {
      setShowModal(false);
    }
  }
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const OpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  return (
    <div className="App">
      <SearchBarHandler onSubmit={handleSearch} />
      <ImgGallery images={images} OpenModal={OpenModal} />

      {isLoading && (
        <Loader
          loading={isLoading}
          type="Hearts"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          className="loader"
        />
      )}
      {images.lenght !== 0 && <Button onClick={currentPageHandler} />}
      {showModal && (
        <Modal onCancel={handleCancelModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
}

export default App;
