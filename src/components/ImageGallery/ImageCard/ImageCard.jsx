import css from "./ImageCard.module.css";

const ImageCard = ({ img, handleSelectPhoto }) => {
  return (
    <div className={css.item}>
      <img
        className={css.img}
        src={img.urls.small}
        alt={img.slug}
        onClick={() => {
          handleSelectPhoto(img);
        }}
      />
    </div>
  );
};

export default ImageCard;