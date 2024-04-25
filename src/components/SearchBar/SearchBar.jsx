import css from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const inputRef = useRef(null);

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = inputRef.current.value;
    if (searchTerm === "") {
      toast('Please specify what you want to find', {
        icon: '🔍',
      });
      return;
    }
    onSubmit(searchTerm);
  };
  return (
    <header className={css.header}>
      <form onSubmit={onHandleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button type="submit" className={css.button}>
          <MdSearch size="24" />
        </button>
      </form>
      <Toaster position="top-left" reverseOrder={false} />
    </header>
  );
}

export default SearchBar;
