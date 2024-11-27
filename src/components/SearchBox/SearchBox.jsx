import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ query, onChange }) {
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        placeholder="Search"
        id={searchId}
        value={query}
        onChange={onChange}
      />
    </div>
  );
}
