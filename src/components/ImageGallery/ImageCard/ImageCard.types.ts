import { ImgProps } from "../../App/App.types";

export interface ImgCardProps {
  img: ImgProps;
  handleSelectPhoto: (img: ImgProps) => void;
}
