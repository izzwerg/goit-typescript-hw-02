import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {

  const handleClick = async () => {
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