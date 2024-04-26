import {ImgProps} from "../App/App.types"

export interface ImgModalProps {
    selectedImg: ImgProps;
    closeModal: () => void;
    modalIsOpen: boolean;
}