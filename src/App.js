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
      <p>
        {props.p1} {props.exercises1}
      </p>
      <p>
        {props.p2} {props.exercises2}
      </p>
      <p>
        {props.p3} {props.exercises3}
      </p>
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
      <Content p1={part1} p2={part2} p3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
      </div>
  )
}

export default App;