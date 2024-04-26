import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImgModalProps } from "./ImageModal.types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImgModalProps> = ({
  selectedImg,
  closeModal,
  modalIsOpen,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
            className={css.img}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
