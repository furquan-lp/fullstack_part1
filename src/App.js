import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.c.name}</h1>
    </div>
  )
};

const Content = (props) => {
  return (
    <div>
      <p>{props.c.parts[0].name} {props.c.parts[0].exercises}</p>
      <p>{props.c.parts[1].name} {props.c.parts[1].exercises}</p>
      <p>{props.c.parts[2].name} {props.c.parts[2].exercises}</p>
    </div>
  )
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.c.parts[0].exercises + props.c.parts[1].exercises + props.c.parts[2].exercises}</p>
    </div>
  )
};

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  console.log(course);

  return (
    <div>
      <Header c={course} />
      <Content c={course} />
      <Total c={course} />
    </div>
  );
}

export default App;