import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from './Components/FunctionComponent'
import ClassComponent from './Components/ClassComponent'
import Person from './Components/Person'
import Click from './Components/Click'
import WindowResize from './Components/WindowResize'

function App() {

  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent /> */}
      {/* <Person name="Name" age={23} />
      <Person name="Student" age={19} /> */}

      <Click message="welcome to react" />

      {/* <WindowResize /> */}
    </>
  )
}

export default App
