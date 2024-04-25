import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImg } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [photos, setPhotos] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getImg({ searchTerm, page });
        setPhotos((prevPhotos) => {
          return prevPhotos === null
            ? response.data.results
            : [...prevPhotos, ...response.data.results];
        });
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm, page]);

  const onSubmit = (query) => {
    setPhotos(null);
    setPage(1);
    setSearchTerm(query);
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSelectPhoto = (photo) => {
    setSelectedImg(photo);
    openModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} handleSelectPhoto={handleSelectPhoto} />
      {isLoading && <Loader />}
      {photos !== null && photos.length > 0 && page < totalPages && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      {selectedImg !== null && (
        <ImageModal
          selectedImg={selectedImg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default App;
