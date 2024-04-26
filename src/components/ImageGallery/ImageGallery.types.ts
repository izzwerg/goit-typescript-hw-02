import { ImgProps} from '../App/App.types'

export interface GalleryProps {
    photos: ImgProps[] | null;
    handleSelectPhoto: (img:ImgProps) => void;
}