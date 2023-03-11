import { useState } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const postive = good / total;

  const addGoodFeedback = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const addNeutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const addBadFeedback = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <Header text="Give Feedback" />
      <Button text="Good" hanldeClick={addGoodFeedback} />
      <Button text="Neutral" hanldeClick={addNeutralFeedback} />
      <Button text="Bad" hanldeClick={addBadFeedback} />
      <Header text="Statistics" />
      {total ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          average={average}
          postive={postive}
        />
      ) : (
        <p>No Feedbacks given</p>
      )}
    </div>
  );
};

export default App;
