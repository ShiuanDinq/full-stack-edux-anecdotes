import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
export const AnecdoteFrom = () => {
  const [anecdote, setAnecdote] = useState("");
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    event.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
  };
  const handleChange = (event) => {
    setAnecdote(event.target.value);
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            name="anecdote"
            type="text"
            value={anecdote}
            onChange={handleChange}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};
