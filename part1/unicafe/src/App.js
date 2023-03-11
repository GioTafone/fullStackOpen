import { useState } from "react";
import Button from "./components/Button";

import Header from "./components/Header";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodFeedback = () => {
    setGood(good + 1);
  };
  const addNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const addBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text="Give Feedback" />
      <Button text="Good" hanldeClick={addGoodFeedback} />
      <Button text="Neutral" hanldeClick={addNeutralFeedback} />
      <Button text="Bad" hanldeClick={addBadFeedback} />
      <Header text="Statistics" />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
