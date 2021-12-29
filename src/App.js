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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Part p1={part1.name} exercise={part1.exercises} />
      <Part p1={part2.name} exercise={part2.exercises} />
      <Part p1={part3.name} exercise={part3.exercises} />
      <Total one={part1.exercises} two={part2.exercises} three={part1.exercises} />
    </div>
  )
}

export default App;