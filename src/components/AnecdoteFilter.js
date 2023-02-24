import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnecdoteFilter } from "../reducers/filterReducer";

export const AnecdoteFilter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSetFilter = (event) => {
    event.preventDefault();

    dispatch(setAnecdoteFilter({ content: filter }));
  };
  return (
    <form>
      <input value={filter} onChange={handleChange}></input>
      <button onClick={handleSetFilter}>SET FILTER</button>
    </form>
  );
};
