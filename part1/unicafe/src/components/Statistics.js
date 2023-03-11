import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, average, postive }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={postive} />
      </tbody>
    </table>
  );
};

export default Statistics;
