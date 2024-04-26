import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await loadMore();
    } catch (error) {
      console.error("Error loading more photos:", error);
    }
  };

  return (
    <>
      <div className={css.wrapper}>
        <button className={css.button} type="button" onClick={handleClick}>
          Load More
        </button>
      </div>
    </>
  );
};

export default LoadMoreBtn;
