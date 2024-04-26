import { useEffect, useState } from "react";
import "./App.css";
import { ImgProps } from "./App.types";
import SearchBar from "../SearchBar/SearchBar";
import { getImg } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState<ImgProps[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<ImgProps | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

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

  const onSubmit = (query: string): void => {
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

  const handleSelectPhoto = (photo: ImgProps): void => {
    setSelectedImg(photo);
    openModal();
  };

  const closeModal = (): void => {
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
