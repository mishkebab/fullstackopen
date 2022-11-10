const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>  
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </div>    
  )
}

const Footer = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exerciseTotal}</p>
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

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Footer exerciseTotal={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}> </Footer>
    </div>
  )
}

export default App