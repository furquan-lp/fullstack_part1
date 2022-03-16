import { useState } from 'react';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ text, value }) => <tr><td>{text}</td> <td>{value}</td></tr>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (good === 0 && neutral === 0 && bad === 0)
    return (<p>No feedback given.</p>);
  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(good - bad) / all} />
      <StatisticLine text='positive' value={(good / all) * 100 + '%'} />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setState = (whom, value) => () => whom(value);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text='good' handleClick={setState(setGood, good + 1)} />
      <Button text='neutral' handleClick={setState(setNeutral, neutral + 1)} />
      <Button text='bad' handleClick={setState(setBad, bad + 1)} />
      <h2>statistics:</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;