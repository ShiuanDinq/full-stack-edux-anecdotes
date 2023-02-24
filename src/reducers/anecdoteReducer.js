import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdotes";
const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    upvoteAnecdoteAction(state, action) {
      const id = action.payload.id;
      const anecdotes = JSON.parse(JSON.stringify(state));
      const anecdoteToChange = anecdotes.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return anecdotes.map((a) => {
        return a.id === id ? changedAnecdote : a;
      });
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

// export default anectdoteReducer;
export const { upvoteAnecdoteAction, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const upvoteAnecdote = (anecdote) => {
  const { id, votes } = anecdote;
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateOne({ id, votes });
    dispatch(upvoteAnecdoteAction(updatedAnecdote));
  };
};
export default anecdoteSlice.reducer;
