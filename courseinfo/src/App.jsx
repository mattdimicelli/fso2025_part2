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
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <>
      <h1>Web Development Curriculum</h1>
      {
        courses.map(course => <Course key={course.id} course={course} />)
      }
    </>
  )
}

export default App