import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = {
    content,
    votes: 0,
  };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const updateOne = async (content) => {
  const { id, votes } = content;
  const newVote = votes + 1;
  const newUrl = `${baseUrl}/${id}`;
  const response = await axios.patch(newUrl, { votes: newVote });
  return response.data;
};

export default { getAll, createNew, updateOne };
