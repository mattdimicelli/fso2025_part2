const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {
      parts.map(part => <Part key={part.name} part={part} />)
    }
  </>
)

const Total = ({ parts }) => {
  let exercises = parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Number of exercises {exercises}</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const App = () => {
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
  }


  return <Course course={course} />
}

export default App