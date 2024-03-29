import { useState } from "react";

import Button from "./components/Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([Array(anecdotes.length).fill(0)]);

  const mostVotedAnecdotes = votes[0].indexOf(Math.max(...votes[0]));
  const highestVote = Math.max(...votes[0]);

  const selectedAnectode = anecdotes[selected];
  const anecdotesVotes = votes[0][selected];

  const generateRandom = () => {
    const araryLength = anecdotes.length - 1;

    let random = Math.random();

    random = Math.floor(random * araryLength);

    return random;
  };

  const copyOfVotesArray = [...votes];

  const handleVote = () => {
    setVotes(
      (prevState) => [...prevState],
      (copyOfVotesArray[0][selected] += 1)
    );
  };

  const handleRandom = () => {
    setSelected(generateRandom());
  };

  return (
    <div>
      <p>{selectedAnectode}</p>
      <p>Votes: {anecdotesVotes}</p>
      <Button handleClick={handleRandom} text="Next Anecdote" />
      <Button handleClick={handleVote} text="Vote Anecdote" />
      <h1>The anecdote with most votes is:</h1>
      <p>{anecdotes[mostVotedAnecdotes]}</p>
      <p>has {highestVote} votes</p>
    </div>
  );
};

export default App;
