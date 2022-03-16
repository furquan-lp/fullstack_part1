import { useState } from 'react';

const MyButton = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const DisplayFeedback = ({ good, neutral, bad }) => {
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
    </>
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
      <MyButton text='good' handleClick={setState(setGood, good + 1)} />
      <MyButton text='neutral' handleClick={setState(setNeutral, neutral + 1)} />
      <MyButton text='bad' handleClick={setState(setBad, bad + 1)} />
      <h2>statistics:</h2>
      <DisplayFeedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;