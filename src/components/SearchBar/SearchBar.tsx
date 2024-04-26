import css from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";
import { FormEvent, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { OnSubmitProps } from "./SearchBar.types";

function SearchBar({ onSubmit }: OnSubmitProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchTerm = inputRef.current?.value.trim();
    if (searchTerm === undefined || searchTerm == "") {
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
