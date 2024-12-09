const Header = (props) => (
  <h2>{props.course}</h2>
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

export default Course;