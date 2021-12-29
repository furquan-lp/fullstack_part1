import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.p[0].name} {props.p[0].exercises}</p>
      <p>{props.p[1].name} {props.p[1].exercises}</p>
      <p>{props.p[2].name} {props.p[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.p[0].exercises + props.p[1].exercises + props.p[2].exercises}</p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
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
  console.log(parts);

  return (
    <div>
      <Header name={course} />
      <Content p={parts} />
      <Total p={parts} />
    </div>
  )
}

export default App;