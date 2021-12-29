import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.p} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.one + props.two + props.three}</p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Part p1={part1} exercise={exercises1} />
      <Part p1={part2} exercise={exercises2} />
      <Part p1={part3} exercise={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  )
}

export default App;