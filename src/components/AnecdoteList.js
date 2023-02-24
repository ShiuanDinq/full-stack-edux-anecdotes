import { useDispatch, useSelector } from "react-redux";
import { upvoteAnecdote } from "../reducers/anecdoteReducer";
import { handleNotification } from "../reducers/notificationReducer";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = async (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    dispatch(handleNotification(`you voted '${anecdote.content}'`));
    dispatch(upvoteAnecdote(anecdote));
  };

  function compare(a, b) {
    if (a.votes > b.votes) {
      return -1;
    }
    if (a.votes < b.votes) {
      return 1;
    }
    return 0;
  }

  const anecdoteForSort = [...anecdotes];
  const filteredAnecdotes = anecdoteForSort.filter((a) =>
    a.content.includes(filter)
  );
  const orderedAnecdotes = filteredAnecdotes.sort(compare);

  return orderedAnecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  ));
};
