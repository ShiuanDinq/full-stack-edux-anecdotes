import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnecdoteFilter } from "./components/AnecdoteFilter";
import { AnecdoteFrom } from "./components/AnecdoteForm";
import { AnecdoteList } from "./components/AnecdoteList";
import Notification from "./components/Notification";
import { initializeAnecdotes, setAnecdotes } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);
  return (
    <div>
      <Notification />
      <AnecdoteFilter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteFrom />
    </div>
  );
};

export default App;
